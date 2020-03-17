# Lifestream

## Developer Requirements
You'll need the following installed on your system to build and run this:
- .NET Core SDK 3.1 (https://dotnet.microsoft.com/download)
- NodeJS and npm (https://nodejs.org/en/)
- ElectronNET.CLI (see below)

### ElectronNET
Electron.NET is used to wrap and run the Asp.Net Core app as a desktop app. The CLI tools can be installed via command line:
`dotnet tool install ElectronNET.CLI -g`
Afterwards, you can either run directly from Visual Studio (using `Electron.NET App` profile) or via command line with `electronize start`
