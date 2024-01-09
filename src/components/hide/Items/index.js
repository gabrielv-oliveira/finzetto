import { Component } from "./style";


export function Reasons(props) {
  return (
    <Component>
          <h1>{props.id}</h1>
          <section>
            <h2>{props.title}</h2>
            {props.reason}
          </section>
    </Component>
  )
}