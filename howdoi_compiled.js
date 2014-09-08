if(!lt.util.load.provided_QMARK_('lt.plugins.howdoi')) {
goog.provide('lt.plugins.howdoi');
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
lt.plugins.howdoi.get_cm = (function get_cm(){return lt.objs.editor.__GT_cm_ed.call(null,lt.objs.editor.pool.last_active.call(null));
});
lt.plugins.howdoi.append_text = (function append_text(text){var cm = lt.plugins.howdoi.get_cm.call(null);var current_line = cm.getCursor().line;return cm.replaceRange(text,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),(current_line + 1),new cljs.core.Keyword(null,"ch","ch",1013907415),0], null)),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),(current_line + 1),new cljs.core.Keyword(null,"ch","ch",1013907415),0], null)));
});
lt.plugins.howdoi.__BEH__ask_howdoi = (function __BEH__ask_howdoi(this$){var cm = lt.plugins.howdoi.get_cm.call(null);var current_line = cm.getCursor().line;var current_line_text = cm.getLine(current_line);var ed = lt.objs.editor.pool.last_active.call(null);var syntax_name = new cljs.core.Keyword(null,"type-name","type-name",1486910640).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));var args = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_line_text,syntax_name], null);lt.objs.notifos.working.call(null,[cljs.core.str("Searching for: "),cljs.core.str(args)].join(''));
return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),"howdoi",new cljs.core.Keyword(null,"args","args",1016906831),args,new cljs.core.Keyword(null,"obj","obj",1014014057),lt.plugins.howdoi.howdoi], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.howdoi","ask-howdoi","lt.plugins.howdoi/ask-howdoi",1968790362),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.howdoi.__BEH__ask_howdoi,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"howdoi.ask","howdoi.ask",2060713707),null], null), null));
lt.plugins.howdoi.__BEH__on_out = (function __BEH__on_out(this$,data){var out = data.toString();lt.plugins.howdoi.append_text.call(null,out);
return lt.objs.statusbar.loader_set.call(null,0);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.howdoi","on-out","lt.plugins.howdoi/on-out",2886071484),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.howdoi.__BEH__on_out,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null,new cljs.core.Keyword(null,"proc.error","proc.error",4143512802),null], null), null));
lt.plugins.howdoi.howdoi = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.howdoi","howdoi","lt.plugins.howdoi/howdoi",2403424582),new cljs.core.Keyword(null,"name","name",1017277949),"howdoi answer",new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.howdoi","ask-howdoi","lt.plugins.howdoi/ask-howdoi",1968790362),new cljs.core.Keyword("lt.plugins.howdoi","on-out","lt.plugins.howdoi/on-out",2886071484),new cljs.core.Keyword("lt.plugins.howdoi","on-error","lt.plugins.howdoi/on-error",4019607346)], null)));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"howdoi.ask","howdoi.ask",2060713707),new cljs.core.Keyword(null,"desc","desc",1016984067),"Howdoi: Search current line",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.plugins.howdoi.howdoi,new cljs.core.Keyword(null,"howdoi.ask","howdoi.ask",2060713707));
})], null));
}

//# sourceMappingURL=howdoi_compiled.js.map