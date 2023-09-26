// control.js

$(function() {
    const LED_RED_PIN = 27;    // GPIO pin connected to the red LED
    const LED_GREEN_PIN = 17;  // GPIO pin connected to the green LED
    const LED_BLUE_PIN = 22;   // GPIO pin connected to the blue LED

    function setLEDColor(red, green, blue) {
        // Set the GPIO pins to control the LED colors
        // Assuming common anode LED (0V for "on")
        gpio.write(LED_RED_PIN, red === 0 ? gpio.HIGH : gpio.LOW);
        gpio.write(LED_GREEN_PIN, green === 0 ? gpio.HIGH : gpio.LOW);
        gpio.write(LED_BLUE_PIN, blue === 0 ? gpio.HIGH : gpio.LOW);
    }

    $('#led_off').click(function() {
        setLEDColor(0, 0, 0);  // Turn off the LEDs
    });

    $('#led_red').click(function() {
        setLEDColor(0, 1, 1);  // Red
    });

    $('#led_green').click(function() {
        setLEDColor(1, 0, 1);  // Green
    });

    $('#led_blue').click(function() {
        setLEDColor(1, 1, 0);  // Blue
    });

    $('#led_white').click(function() {
        setLEDColor(0, 0, 0);  // White (all LEDs off for common anode)
    });
});
