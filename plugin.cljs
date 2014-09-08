(ns lt.tutorial
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

(def howdoi (object/create (object/object* ::howdoi
                                           :name "howdoi answer"
                                           :behaviors [::ask-howdoi ::on-out ::on-error])))

(defn append-text [text]
  (let
    [cm (editor/->cm-ed (pool/last-active))
     current-line (.-line (.getCursor cm))]
    (.replaceRange cm text
                   (clj->js {:line (inc current-line) :ch 0})
                   (clj->js {:line (inc current-line) :ch 0}))))

; TODO: Auto-append current language to search query
(behavior ::ask-howdoi
          :triggers #{:howdoi.ask}
          :reaction (fn [this]
                      (let [cm (editor/->cm-ed (pool/last-active))
                            current-line (.-line (.getCursor cm))
                            current-line-text (.getLine cm current-line)]
                        (proc/exec {:command "howdoi"
                                    :args [current-line-text]
                                    :obj howdoi}))))

(behavior ::on-out
          :triggers #{:proc.out :proc.error}
          :reaction (fn [this data]
                      (let [out (.toString data)]
                        (append-text out)
                        (notifos/set-msg! ("Done")))))

(cmd/command {:command :howdoi.ask
              :desc "Howdoi: Search current line"
              :exec (fn [] (object/raise howdoi :howdoi.ask))})
