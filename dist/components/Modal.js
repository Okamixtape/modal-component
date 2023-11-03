

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _valid = _interopRequireDefault(require("./valid.png"));
var _error = _interopRequireDefault(require("./error.png"));
require("./modal.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }

/**
 * React component
 * @param { {modal: String|object, closeIcon: Boolean, button: Boolean, allowCustomization: Boolean, buttonCallback: Function } }
 * @param modal -  
To use pre-created modals, use strings with the words "error" or "valid". To use a custom modal, pass an object that has the following properties: 'title', 'icon', 'altText', 'content', 'cta' and put the props allowCustomization to true.
 * @param closeIcon - A boolean, the cross icon will appear or not depending on true or false.
 * @param button - A boolean, the button will appear or not depending on true or false.
 * @param allowCustomization - A boolean, if set to true, you can pass your own object in the modalType props.
 * @param buttonCallback - The function that is called when you press the button & cross icon.
 * @returns { React.ReactElement } A Modal component
 */
const Modal = _ref => {
  let {
    modal,
    closeIcon,
    button,
    allowCustomization,
    buttonCallback
  } = _ref;
  const [shown, setShown] = (0, _react.useState)(true);

  // IF THE MODAL IS NOT CUSTOMIZED, THE MODAL IS SET TO VALID OR ERROR
  const modalOptions = [{
    title: 'valid',
    icon: _valid.default,
    altText: 'valid image',
    content: 'Your request has been sent.',
    cta: 'Close'
  }, {
    title: 'error',
    icon: _error.default,
    altText: 'error image',
    content: 'An error has occured.',
    cta: 'Close'
  }];

  // WHEN THE MODAL IS CLOSED, THE STATE IS SET TO FALSE AND THE CALLBACK IS CALLED
  const handleShown = () => {
    setShown(false);
    if (buttonCallback) {
      buttonCallback();
    }
  };

  // WHEN THE ESCAPE KEY IS PRESSED, THE MODAL IS CLOSED
  (0, _react.useEffect)(() => {
    const handleKeyPress = event => {
      if (event.keyCode === 27) {
        handleShown();
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  });
  let option;
  if (allowCustomization) {
    option = modal;
  } else {
    let selectedModalOption = modalOptions.filter(i => i.title === modal);
    option = selectedModalOption[0];
  }
  if (shown) {
    return /*#__PURE__*/_react.default.createElement("modal", {
      open: true,
      className: "modal__bg",
      id: "myModal"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "modal",
      id: "modal"
    }, closeIcon ? /*#__PURE__*/_react.default.createElement("button", {
      onClick: () => handleShown(),
      className: "modal__close-btn"
    }, "\u2716") : null, /*#__PURE__*/_react.default.createElement("img", {
      className: "modal__img",
      src: option.icon,
      alt: option.altText
    }), /*#__PURE__*/_react.default.createElement("p", {
      className: "modal__body"
    }, option.content), button ? /*#__PURE__*/_react.default.createElement("button", {
      onClick: () => handleShown(),
      className: 'modal__cta modal__cta--' + option.title
    }, option.cta) : null));
  } else {
    return /*#__PURE__*/_react.default.createElement("modal", {
      open: false
    });
  }
};

exports.default = Modal;