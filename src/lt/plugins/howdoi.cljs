(ns lt.plugins.howdoi
  ; TODO: Clean-up requires
  (:require [lt.object :as object]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.proc :as proc]
            [lt.objs.command :as cmd]
            [lt.objs.tabs :as tabs]
            [lt.objs.statusbar :as statusbar]
            [lt.objs.notifos :as notifos]
            [lt.util.js :as util])
  (:require-macros [lt.macros :refer [behavior defui]]))

(defn get-cm []
  (editor/->cm-ed (pool/last-active)))

(defn append-text [text]
  (let
    [cm (get-cm)
     current-line (.-line (.getCursor cm))]
    (.replaceRange cm text
                   (clj->js {:line (inc current-line) :ch 0})
                   (clj->js {:line (inc current-line) :ch 0}))))

; TODO: Save line handle before query (to prevent text inserted in wrong place if you move cursor while euery in progress)
(behavior ::ask-howdoi
          :triggers #{:howdoi.ask}
          :reaction (fn [this]
                      (let [cm (get-cm)
                            current-line (.-line (.getCursor cm))
                            current-line-text (.getLine cm current-line)
                            ed (pool/last-active)
                            syntax-name (-> @ed :info :type-name)
                            args [current-line-text syntax-name]]
                        (notifos/working (str "Searching for: " args))
                        (proc/exec {:command "howdoi"
                                    :args args
                                    :obj howdoi}))))

(behavior ::on-out
          :triggers #{:proc.out :proc.error}
          :reaction (fn [this data]
                      (let [out (.toString data)]
                        (append-text out)
                        (statusbar/loader-set 0))))

(def howdoi (object/create (object/object* ::howdoi
                                           :name "howdoi answer"
                                           :behaviors [::ask-howdoi ::on-out ::on-error])))

(cmd/command {:command :howdoi.ask
              :desc "Howdoi: Search current line"
              :exec (fn [] (object/raise howdoi :howdoi.ask))})
