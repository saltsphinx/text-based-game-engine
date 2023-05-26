# text-based-game-engine
this is a fairly simple package that should be easily extendable. it includes a command/scene system that allows for command aliases and easy calling of them. a central game module manages said scenes and has a commands property which is an object. when a scene is initialized, all commands in the game's command property are dumped, and the scenes commands are added along with any default commands you have setup. The game module also has a data object that must be passed as a first argument to every command. There is also a simple save/load system that uses localStorage and JSON to save whatever data you'd like to persist. These systems are not linked to one another, so it'd be up to you to do so in whichever way you'd like.

This package is vanila JS and uses ES6 modules.

# API
## Game
callCommand(alias, ...params)
- a method that calls commands from the game objects command property.
- takes an alias string and however many strings as params and calls said command if it exists, passing it the params deconstructed.
- It passes the data property as the first argument.

initializeScene(sceneName)
- a method that acts as the scene manager, swapping scenes and loading and unloading their commands.
- takes a sceneName string as a param, dumps any previous commands in commands property and replaces them with scene's commands if it exists, and any default commands you may have.


data
- an object meant to contain any data you want to persist between scenes and game sessions.
- All commands should their first argument reserved for data.

scenes
- an object meant to contain scenes or scene like objects. Can be set to an object contain scenes, or have them injected. However you go about it is up to you.

defaultCommands
- and object that should contain commands/methods you want present in every scene. Similiar to the scenes object, you'll have to decide how to populate the object.

commands
- contains the current scenes commands and any default commands that may be present.

## Scene
addCommand(cb, ...aliases)
- a method that takes a callback and a list of aliases and adds them to the scene's commands object(not to be confused with the game's commands property)
- the program will be terminated if an alias already exists in the commands property.
- the callback must reserve its first argument for the data object. otherwise it wont work as expected.

commands
- an object that contains any created commands. A command can have multiple aliases that point to one  method.

## Serialize
saveData(obj, key)
- takes an object and key as parameters, checks if localStorage is avaliable and saves the obj as a string to that key
- if local storage isnt avaliable then this method does nothing. You'll have to find another way of doing so

loadData(key)
- takes a key, checks if localStorage is avaliable and returns an object if the key is found
- similiar to saveData, it won't do anything is localStorage isnt avaliable or if the quota is reached.
- will terminate the program if the data found is invalid JSON. Beware of what you're saving.

## Some warnings
- the scenes module is missing a way of initializing any necesarry data on being loaded. This is basically a must and will be included soon.
- any game created with the system can benefit greatly from a pub/sub(event) system. not sure if it's a necessity for the core though.
- honestly I didn't research local storage a lot. You might have to be aware of the amount of data you use so the saving doesn't hit the quota and not work.
- This package only has unit tests, sorry