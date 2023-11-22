import { Component } from "./styles";

export function Links(props) {
  return (
    <Component>
      <li title={props.page}>
        <a href={props.url} target="_blank" rel="noopener noreferrer">{props.page}</a>
      </li>
    </Component>
  )
}