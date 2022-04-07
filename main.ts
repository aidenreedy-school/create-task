function even_or_odd () {
    // This checks if the number of names is and even or odd number by dividing the number by 2 and seeing if there is a remainder which would happen if its an odd number.
    if (num_names % 2 == 1) {
        // This takes out the last name which we will use to display a group of three later because of the odd number.
        odd_one_out = text_list.pop()
        // This returns "odd" because there is an odd number of names.
        return "odd"
    } else {
        // This returns "even" because there is an even number of names.
        return "even"
    }
}
// This is the main function which displays the groups and uses sequencing by having more than one block that runs.
function anounce_groups (even_or_odd2: string) {
    // Here is some selection being used by changing what part of the code runs depending on if there is an even or odd number of names because if its odd we will need to display a group of three.
    if (even_or_odd2 == "odd") {
        // This repeats the displaying part because we want to display more than one group, it has a -2 on it bc of the odd number of names and this counter acts a bug where it would display an extra group.
        for (let index = 0; index <= num_names - 2; index++) {
            // This makes it so it displays a group of three the first time.
            if (index == 0) {
                // This displays the group of three.
                game.splash("Group number " + (index + 1) + " is " + text_list[index] + ", " + text_list[index + 1] + ", and " + odd_one_out)
                // This makes it so the index changes by 2 in total because of the multiple names being displayed.
                index += 1
            } else {
                // This displays all other groups if there are an odd number of names.
                game.splash("The next group is " + text_list[index] + " and " + text_list[index + 1])
                // This makes it so the index changes by 2 in total because of the multiple names being displayed.
                index += 1
            }
        }
    } else {
        // Here is an example of iteration with a for loop to display more than one group of names.
        for (let index = 0; index <= num_names; index++) {
            // This displays all groups if there are an even number of names.
            game.splash("This group is " + text_list[index] + " and " + text_list[index + 1])
            // This makes it so the index changes by 2 in total because of the multiple names being displayed.
            index += 1
        }
    }
}
let odd_one_out = ""
let names = ""
let num_names = 0
let text_list: string[] = []
// This block makes the list of names but is blank because we don't know the names yet.
text_list = [""]
// This asks for how many names there are because we need to know how many times to ask for names and because it helps determine if it's an even or odd number of names.
num_names = game.askForNumber("How many names will you be inputting?")
// This repeats for the number of names being input and inserts each name at a random point in the list so that groups are random.
for (let index = 0; index < num_names; index++) {
    names = game.askForString("What is this persons name?")
    text_list.insertAt(randint(0, text_list.length), names)
}
// This removes the blank variable from the list from when it was created.
text_list.removeAt(text_list.indexOf(""))
// This calls the function that displays each group.
anounce_groups(even_or_odd())
