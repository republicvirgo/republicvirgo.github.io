import React from "react";
class CapitalizedText extends React.Component {
  render() {
    return jsUcfirst(this.props.text);
  }
}
function jsUcfirst(string) {
  return string.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
export default CapitalizedText;
