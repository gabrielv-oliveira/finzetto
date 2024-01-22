import { Content } from "./content"
import { Component } from "./styles"



export function About() {

  return (
    <Component id="about">
      <img src="/about.jpg" alt="About us" data-aos="fade-left" />
      <Content/>
    </Component>
  )
}