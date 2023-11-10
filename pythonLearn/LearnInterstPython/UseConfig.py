from configparser import ConfigParser

CONFIGFILE = 'area.ini'

config = ConfigParser()
# read configuration file
config.read(CONFIGFILE, encoding="utf-8")

print(config.defaults())
print(config.sections())

# print default greeting
# search greeting  in message part
print(config['messages'].get('greeting'))

# use configuration file's hint(question) to let user input radio
radius = float(input(config['messages'].get('question') + ''))

# print result_message
# end with space
print(config['messages'].get('result_message'), end=' ')

# getfloat() will change getted value to float
print(config['numbers'].getfloat('pi') * radius**2)
