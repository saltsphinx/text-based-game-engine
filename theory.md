simple text based game where the user has to break out of a building. they have rpg stats that aid(or not) in the approaches they can take to escape. there will be a main menu, a character creation scene, the main game world and dialog trees. the logic required for these, what Ill call, scenes shouldnt be too different from one another. maybe each scene is like a container(an object) with its only set of commands(methods) that the user can call through text, and these scenes will have access to a broader container that keeps track of data. seperate from this problem is allowing users to type the commands, parsing their input in whatever that'll be done and having aliases for the commands possibly. there will have to be a way of switching between scenes also. a bonus would be being able to save the game, so the users character, their inventory now that i think about it and their main game world(decisions theyve made).

issue:
i plan on having parts of the game seperated from each other, so like a scene/stage set up. scenes are basically a collection of commands/methods and they also initiate necessary data for the commands to work properly. examples of scenes are menus, individual rooms, score scenes and gameover scenes.

~~the issue however is that the scenes are self contained, and its sometimes required that one scene triggers another. rather than allowing scenes to know about one another, it may be a better idea for scenes to either be within scope or be passed a method that allows scene jumping.~~

05 24 23: better answer: remove the callCommand method from scenes and place in game module. its one less method being replicated everytime a scene is made, and the plan now is to have the game module have its own commands object. we deconstruct the current scenes commands into the object, then add any additional commands that persist across all scenes if any exist. when a new scene is loaded, dump the current contents and repeat with the new scene's commands.
to answer the above issue, there will be either a scene managing method or module that scenes can interact with. ~~scenes commands and the manager will be within the same closure, so they can access it simpily.~~ didnt realize how wrong I was until i got to implementing it. a property of one object cant access the property of another unless directly passed to it. they arent within the same closure.

05 25 23 i was thinking to add to the scene system things like ***room description*** or ***room history***, but that shouldnt be the job of the core game engine. I can extend the functionality of these modules when Im actually creating the game. I can even extend it so those things are a gaming kit of their own, like a rpg extension of the 'engine' im calling this. either way, this package should be kept fairly simple. command calling, scene swapping and dumping, serialization and tests.

steps
1. create the scene factory
  - the scene contain commands, which are methods with a name the user can call and pass information to
    - ie. ***look door***, ***look*** would be the name of the look command and ***door*** would be a string passed as a parameter to the command.
  - commands property that is an object for easy key indexing, allows for aliases
  - ie. ***look*** === **l**
  - properities: name, commands
  - addCommand method that takes a call back and an alias(s)
  - belongs in game module ~~callCommand method that indexes commands object and calls command if found, passing it parameters~~
3. create the main game module
  - this will contain all character data, manage swapping and containing of scenes
4. create the command calling system. this is seperate from the UI

05 25 23
im going to keep it simple and just use localStorage since I havent before and might add other options in the future. the game module has a data object that will store all game data. hopefully itll be as simple as turning said object into JSON, storing it in localStorage then parsing it on game/save load. whats being saved, such as room info, inventory, game config isnt the concern of this package. nodejs' global object doesnt have localStorage or Storage, so for testing Ill either have to make a mock or find one online.

serialization steps
1. saving function that takes an object and string, stringifies it and saves it to localStorage in an object with that string as a key.
2. loading function that takes a string and checks localStorage for data, returns it parsed if found
