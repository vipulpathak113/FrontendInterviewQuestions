// The facade design pattern is a structural pattern that provides a simplified interface to a complex system of classes, objects or libraries.
// It acts as a wrapper that sits between the client and the complex system and presents a simplified and easy-to-use interface to the client.
// This pattern is commonly used in software development to make it easier for clients to interact with large, complex systems.

// Example if you are calling api in 100 of components and using fetch for it.
// now if you have to use axios then it is hectic to change in all 100 components.
// instead create a seperate file/utility(Facade) that have logic of api in one component and import in other components.
// so if there is change in future then it will be only in one file. 