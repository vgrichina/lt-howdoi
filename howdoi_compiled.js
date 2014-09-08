if(!lt.util.load.provided_QMARK_('lt.plugins')) {
goog.provide('lt.plugins');
goog.require('cljs.core');
goog.require('lt.objs.statusbar');
goog.require('lt.util.js');
goog.require('lt.objs.tabs');
goog.require('lt.objs.notifos');
goog.require('lt.objs.proc');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.statusbar');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.proc');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('lt.util.js');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.append_text = (function append_text(text){var cm = lt.objs.editor.__GT_cm_ed.call(null,lt.objs.editor.pool.last_active.call(null));var current_line = cm.getCursor().line;return cm.replaceRange(text,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),(current_line + 1),new cljs.core.Keyword(null,"ch","ch",1013907415),0], null)),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),(current_line + 1),new cljs.core.Keyword(null,"ch","ch",1013907415),0], null)));
});
lt.plugins.__BEH__ask_howdoi = (function __BEH__ask_howdoi(this$){var cm = lt.objs.editor.__GT_cm_ed.call(null,lt.objs.editor.pool.last_active.call(null));var current_line = cm.getCursor().line;var current_line_text = cm.getLine(current_line);return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),"howdoi",new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_line_text], null),new cljs.core.Keyword(null,"obj","obj",1014014057),lt.plugins.howdoi], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins","ask-howdoi","lt.plugins/ask-howdoi",2617714476),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.__BEH__ask_howdoi,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"howdoi.ask","howdoi.ask",2060713707),null], null), null));
lt.plugins.__BEH__on_out = (function __BEH__on_out(this$,data){var out = data.toString();lt.plugins.append_text.call(null,out);
return lt.objs.notifos.set_msg_BANG_.call(null,"Done".call(null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins","on-out","lt.plugins/on-out",900502166),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.__BEH__on_out,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null,new cljs.core.Keyword(null,"proc.error","proc.error",4143512802),null], null), null));
lt.plugins.howdoi = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins","howdoi","lt.plugins/howdoi",569323784),new cljs.core.Keyword(null,"name","name",1017277949),"howdoi answer",new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins","ask-howdoi","lt.plugins/ask-howdoi",2617714476),new cljs.core.Keyword("lt.plugins","on-out","lt.plugins/on-out",900502166),new cljs.core.Keyword("lt.plugins","on-error","lt.plugins/on-error",4736559828)], null)));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"howdoi.ask","howdoi.ask",2060713707),new cljs.core.Keyword(null,"desc","desc",1016984067),"Howdoi: Search current line",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.plugins.howdoi,new cljs.core.Keyword(null,"howdoi.ask","howdoi.ask",2060713707));
})], null));
}

//# sourceMappingURL=howdoi_compiled.js.map