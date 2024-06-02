// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:widgets/Geoprocessing/setting/ParamNode.html":'\x3cdiv class\x3d"link-action-node param-node" data-dojo-attach-point\x3d"displayNode"\x3e\r\n  \x3cdiv\x3e\r\n    \x3cspan\x3e${nls_name}:\x3c/span\x3e\r\n    \x3cspan style\x3d"margin: 2px"\x3e${param_name}\x3c/span\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv\x3e\r\n    \x3cspan\x3e${nls_type}:\x3c/span\x3e\r\n    \x3cspan style\x3d"margin: 2px"\x3e${param_dataType}\x3c/span\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv\x3e\r\n    \x3cspan\x3e${nls_required}:\x3c/span\x3e\r\n    \x3cspan style\x3d"margin: 2px"\x3e${param_required}\x3c/span\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"action-group dojoDndHandle" data-dojo-attach-point\x3d"actionNode"\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/Geoprocessing/setting/ParamNodeAvatar.html":'\x3cspan class\x3d"avatarText"\x3e${param_name}\x3c/span\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/string dojo/aspect dojo/on dojo/dom-class dojo/dom-style dojo/dom dojo/Evented dojo/dnd/Source dojo/dom-construct dijit/_WidgetBase dojo/text!./ParamNode.html dojo/text!./ParamNodeAvatar.html".split(" "),function(l,g,h,m,n,e,f,p,q,r,k,t,u,v){return l([t,q],{params:void 0,nls:void 0,direction:void 0,useResultMapServer:!1,postCreate:function(){this.inherited(arguments);this.dndObj=new r(this.domNode,{singular:!0,withHandles:!0,accept:[this.direction],
creator:g.hitch(this,this._paramNodeCreator)});this.dndObj.insertNodes(!1,this.params);!0===this.useResultMapServer&&"output"===this.direction?this.hideOutputInResultMap():this.showOutputInResultMap();this.own(n(this.domNode,"click",g.hitch(this,this.select)));m.after(this.dndObj,"onDrop",g.hitch(this,this.handleDrop))},_paramNodeCreator:function(a,b){return{node:"avatar"===b?k.toDom(h.substitute(v,{param_name:a.name})):k.toDom(h.substitute(u,{nls_name:this.nls.name,nls_type:this.nls.type,nls_required:this.nls.required,
param_name:a.name,param_dataType:a.dataType,param_required:a.required})),data:a,type:[this.direction]}},getSize:function(){return this.params.length},selectDefault:function(){var a=this.dndObj.getAllNodes()[0],b=this.dndObj.getItem(a.id);e.add(a,"dojoDndItemAnchor");this.emit("select-param",b.data,this.direction)},select:function(a){var b=a.target||a.srcElement,d;this.dndObj.getAllNodes().forEach(function(c){p.isDescendant(b,c)?(d=c,e.add(c,"dojoDndItemAnchor")):e.remove(c,"dojoDndItemAnchor")});
d&&(a=this.dndObj.getItem(d.id),this.emit("select-param",a.data,this.direction))},clearSelection:function(){this.dndObj.getAllNodes().forEach(function(a){e.remove(a,"dojoDndItemAnchor")})},handleDrop:function(a,b){var d=b[1][0];this.dndObj.getAllNodes().forEach(function(c){c.id!==d.id&&e.remove(c,"dojoDndItemAnchor")});a=this.dndObj.getItem(d.id);this.emit("select-param",a.data,this.direction)},getConfig:function(){var a=[];this.dndObj.getAllNodes().forEach(function(b){b=this.dndObj.getItem(b.id);
a.push(b.data)},this);return a},hideOutputInResultMap:function(){this.dndObj.getAllNodes().forEach(function(a){var b=this.dndObj.getItem(a.id);"GPFeatureRecordSetLayer"!==b.data.dataType&&"GPRasterDataLayer"!==b.data.dataType&&"GPRecordSet"!==b.data.dataType||f.set(a,"display","none");"MapServiceLayer"===b.data.dataType&&f.set(a,"display","")},this)},showOutputInResultMap:function(){this.dndObj.getAllNodes().forEach(function(a){var b=this.dndObj.getItem(a.id);"GPFeatureRecordSetLayer"!==b.data.dataType&&
"GPRasterDataLayer"!==b.data.dataType&&"GPRecordSet"!==b.data.dataType||f.set(a,"display","");"MapServiceLayer"===b.data.dataType&&f.set(a,"display","none")},this)}})});