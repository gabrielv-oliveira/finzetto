import { Component } from "./styles";

export function Tags(props) {
  return (
    <Component>
      <li title={props.description}>
        {props.tags}
      </li>
    </Component>
  )
}