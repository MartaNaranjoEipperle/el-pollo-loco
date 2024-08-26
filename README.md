# El Pollo Loco

**El Pollo Loco** is an exciting and challenging game developed as an exercise in object-oriented programming. In this game, you fight against a crazy chicken (Pollo Loco) and use your programming skills to design and improve the game.

## Game Description

In **El Pollo Loco**, your goal is to defeat the crazy chicken. To achieve this, you need to collect bottles and throw them at the chicken. Be careful not to get hurt by other chickens while trying to reach your goal!

### Game Instructions

1. **Collect Bottles**: Move through the game and collect bottles scattered throughout the levels.
2. **Throw Bottles**: Use the collected bottles to throw at the crazy chicken.
3. **Defend Yourself**: Watch out! The chickens can hurt you, so keep an eye on them and defend yourself if needed.

### Controls

- **Move**: Use the arrow keys (←, ↑, →, ↓) or the corresponding buttons on your mobile device.
- **Jump**: Press the spacebar or tap the appropriate button on your mobile device.
- **Throw Bottles**: Press the "D" key or tap the corresponding button on your mobile device.

## Object-Oriented Programming

This project utilizes object-oriented programming (OOP). Here are some key concepts and classes used in the game:

- **Classes and Objects**: The game uses various classes to model different elements of the game, including `Character`, `Bottle`, `Chicken`, and `Level`.

- **Inheritance**: Many classes inherit from general base classes. For example, `Chicken` and `SmallChicken` might inherit from a base class `Enemy`.

- **Encapsulation**: Attributes and methods of classes are private to prevent direct changes, with public methods provided for interacting with objects.

- **Polymorphism**: Methods are overridden in derived classes to implement specific behaviors that are inherited from base classes.

### Project Structure

- `index.html`: The main page of the game.
- `js/`: JavaScript files containing the game logic and object-oriented structure.
- `levels/`: Files defining the various levels of the game.
- `models/`: Object models for the game, containing different classes and their behaviors.
- `style.css`: CSS files for styling the game.
- `audio/`: Audio files for the game.
- `img/`: Images and icons for the game.
