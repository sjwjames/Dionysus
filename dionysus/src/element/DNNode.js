dn.Node=dn.extend({
  _localZOrder: 0,
  _globalZOrder: 0,

  _rotationX: 0,
  _rotationY: 0,
  _scaleX: 1.0,
  _scaleY: 1.0,
  _position: null,

  _normalizedPosition:null,
  _usingNormalizedPosition: false,
  _normalizedPositionDirty: false,

  _skewX: 0.0,
  _skewY: 0.0,
  _children: null,
  _visible: true,
  _anchorPoint: null,
  _contentSize: null,
  _running: false,
  _parent: null,
  // "whole screen" objects. like Scenes and Layers, should set _ignoreAnchorPointForPosition to true
  _ignoreAnchorPointForPosition: false,
  userData: null,
  userObject: null,

  //since 2.0 api
  _reorderChildDirty: false,
  _shaderProgram: null,
  arrivalOrder: 0,

  _actionManager: null,
  _scheduler: null,
  _eventDispatcher: null,

  _additionalTransformDirty: false,
  _additionalTransform: null,
  _componentContainer: null,
  _isTransitionFinished: false,

  _className: "Node",
  _showNode: false,
  _name: "",                     ///<a string label, an user defined string to identify this node

  _realOpacity: 255,
  _realColor: null,
  _cascadeColorEnabled: false,
  _cascadeOpacityEnabled: false,

  _renderCmd:null,

  _camera: null,

});
