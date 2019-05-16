# Project

Open weather map

# Goal of this project

Development of a test web project working with the service of API "OpenWeatherMap"

# Description of the project architecture

The project is a SPA + Web API.

# Technology stack

**Angular** - There are possible alternatives: *React*, *Vue.js*. The main selection criteria were: the ability to work with TypeScript, the use of a framework for building a SPA.

**C#** -  There are possible alternatives: *Java*, *Python*, *GO*, *JS*. The main selection criteria were: a large community, the availability of complete documentation of the language, fast development of language.

**dotnet core web api** - There is possible alternative: *dotnet framework web api*. The main selection criteria were: support for cross-platform, the ability to work in Visual Studio Code.

**OpenWeatherMap** is a library for working with service of API "api.openweathermap". There are possible alternatives: writing your own classes to access the API, using projects on GitHub. The main selection criteria were: to be able to download assembly from Nuget.org, easy use.

# Before start work

Before start work necessary to add the file: appsettings.Secret.json.
Body this file:
```json
{
    "Keys": {
        "OWMKey": "Some key from service Open Weather map"
    }
}
```