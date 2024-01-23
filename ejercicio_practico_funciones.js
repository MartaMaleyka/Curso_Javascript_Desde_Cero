 // Define a constructor function for PowerpuffGirl
function PowerpuffGirl(name, color, superpower) {
    // Set properties for the PowerpuffGirl object
    this.name = name;
    this.color = color;
    this.superpower = superpower;
    this.isLeader = false;

    // Define a method to display information about the PowerpuffGirl
    this.displayInfo = function () {
        console.log(`Powerpuff Girl Information:
            Name: ${this.name}
            Color: ${this.color}
            Superpower: ${this.superpower}
            ${this.isLeader ? 'Leader: Yes' : 'Leader: No'}
        `);
    };

    // Define a method to make the PowerpuffGirl the leader
    this.becomeLeader = function () {
        this.isLeader = true;
        console.log(`${this.name} has become the leader of the Powerpuff Girls!`);
    };
}

// Create instances of PowerpuffGirl
const blossom = new PowerpuffGirl('Blossom', 'Pink', 'Ice Breath');
const buttercup = new PowerpuffGirl('Buttercup', 'Green', 'Super Strength');
const bubbles = new PowerpuffGirl('Bubbles', 'Blue', 'Flight');

// Display information about each PowerpuffGirl
blossom.displayInfo();
buttercup.displayInfo();
bubbles.displayInfo();

// Make Blossom the leader and display updated information
blossom.becomeLeader();
blossom.displayInfo();

// Display information about Buttercup and Bubbles after Blossom becomes the leader
buttercup.displayInfo();
bubbles.displayInfo();
