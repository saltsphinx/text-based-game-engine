simple text based game where the user has to break out of a building. they have rpg stats that aid(or not) in the approaches they can take to escape. there will be a main menu, a character creation scene, the main game world and dialog trees. the logic required for these, what Ill call, scenes shouldnt be too different from one another. maybe each scene is like a container(an object) with its only set of commands(methods) that the user can call through text, and these scenes will have access to a broader container that keeps track of data. seperate from this problem is allowing users to type the commands, parsing their input in whatever that'll be done and having aliases for the commands possibly. there will have to be a way of switching between scenes also. a bonus would be being able to save the game, so the users character, their inventory now that i think about it and their main game world(decisions theyve made).

steps
1. create the scene factory
  - the scene contain commands, which are methods with a name the user can call and pass information to
    - ie. ***look door***, ***look*** would be the name of the look command and ***door*** would be a string passed as a parameter to the command.
  - commands property that is an object for easy key indexing, allows for aliases
  - ie. ***look*** === **l**
  - properities: name, commands
  - addCommand method that takes a call back and an alias(s)
3. create the main game module
  - this will contain all character data, manage swapping and containing of scenes
4. create the command calling system. this is seperate from the UI