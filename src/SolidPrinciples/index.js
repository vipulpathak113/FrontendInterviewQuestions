import React from "react";

export default function SolidPrinciples() {
  return (
    <>
      <h1>Solid Principles</h1>
      SOLID principles are a set of software designs which guide developers in
      building robust, maintainable applications while minimizing the cost of
      changes.
      <ul>
        <li>
          <b>Single responsibility principle:</b> A class, a module, or a
          function should be only responsible for one actor. So, it should have
          one and only one reason to change. Ex: add,delete,update employee n calculate salary should be seperate class.
        </li>
        <li>
          <b>Open-closed principle:</b> Functions, modules, and classes should
          be extensible but not modifiable. Ex: Salary Add function to add without directly modfying array
        </li>
        <li>
          <b>Liskov substitution principle:</b> Liskov principle states that we
          should not replace a parent class with its subclasses if they create
          unexpected behaviors in the application. Ex: Bird extend animal , but ostrich cannot extend as cannot fly
        </li>
        <li>
          <b>Interface segregation principle:</b> Clients should not be pushed
          to depend on interfaces they will never use. Ex: Driving class have startcar n starttruck methods now if cardriving test extend driving test then it as to implement both methods
        </li>
        <li>
          <b>Dependency inversion principle:</b>Higher-level modules should use abstractions. However, they should not depend on low-level modules. Ex: Suppose you use yahoo as email n now you have to use gmail then it should be changed in one place only
        </li>
      </ul>
      <a href="https://medium.com/@akashjha9041/solid-principles-in-javascript-ab69197e4cf7">For more info </a>
    </>
  );
}
