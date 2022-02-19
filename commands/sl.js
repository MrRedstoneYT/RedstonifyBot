// If slallow is going to be a boolean, you should initialize it with either true or false
// Otherwise the value is either 'undefined', or 'null'
let slallow = true;

module.exports = {
  getSlallow: () => { return slallow },
  category: 'ServerLink',
  description: 'SL',
  slash: 'both',
  ownerOnly: true,
  options: [
    {
      name: 'allow',
      description: 'true/false',
      // If you are using a boolean, set the type to BOOLEAN, that way the value can only ever be true or false
      type: 'BOOLEAN',
      required: true
    }
  ],
  callback: ({ message, interaction }) => {
    // If it's a message, this stays the same, no need to touch it
    if (message) {
      const MSG = message.content.slice(4).trim();
      if (MSG === "true") {
        slallow = true;
        message.channel.send('Set to true')
      } else if (MSG === "false") {
        slallow = false;
        message.channel.send('Set to false')
      } else {
        message.channel.send('Error, Not proper value. \`[true | false]\`')
        // You should probably provide some type of reason why it errored, but its fine for now
      }

      return;
    }

    // Since you changed the type of 'allow' to BOOLEAN, you must use .getBoolean instead of .getString (also you were getting the option 'message', which doesnt exist. im guessing that was a mistake)
    // No need for any fancy logic as it can only ever be true or false, which is provided by discord as the only acceptable options
    slallow = interaction.options.getBoolean('allow');
    // Use a string literal to show what it is now set to
    // Will reply either 'Set to false' or 'Set to true'
    interaction.reply(`Set to ${slallow}`);
    // Alternatively you could do something a little more complex for a bit better formatting:

    // interaction.reply(`Serverlink is now ${slallow ? 'allowed' : 'disallowed'}`);

    // This is a ternary operator, first it takes a boolean or a condition that evaluates to a boolean (such as 'slallow', or '3 > 2')
    // Then you use the ? symbol to specify a ternary, with the next value being what it does if the condition is true, in this case we add the string 'allowed'
    // Then use a : symbol for the else, statement, and what we want to do if the condition is false, in this case we use the string 'disallowed'
    
    // This is a bit more of a complicated thing, but basically a ternary is an in-line if-else statement

    // Feel free to remove this long comment lol
  }
}

// Now, you need to export the variable slallow
// Using ES6 its as easy as 'export slallow', then it can be imported from any module (JS file)
// However with commonJS its a bit more complicated
// exports being the object that is being exported from the module, then we assign the value slallow to our slallow value
// exports.getSlallow = () => { return slallow };
// So now we *should* be able to do something like this in another file:
// const { slallow } = require("*path to this file*");
/*
  thanks for the confidence 

  lol, trying to find how to do it again xD

*/