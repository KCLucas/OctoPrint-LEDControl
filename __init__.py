# __init__.py
from flask import Blueprint, render_template

def __plugin_load__():
    # Register the control tab template
    octoprint.server.blueprint.submenu('/control', 'control', template='control_tab.jinja2', order=1)

    # Register the control.js file
    octoprint.server.staticFolder('static', plugin_path('OctoPrint-LEDControl'), 'static')