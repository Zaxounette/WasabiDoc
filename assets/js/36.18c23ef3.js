(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{395:function(t,e,a){"use strict";a.r(e);var s=a(25),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"deterministic-build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deterministic-build"}},[t._v("#")]),t._v(" Deterministic Build")]),t._v(" "),a("blockquote",[a("p",[t._v("Reproducible [or deterministic] builds are a set of software development practices that create an independently-verifiable path from source to binary code.\n~ "),a("a",{attrs:{href:"https://reproducible-builds.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ReproducibleBuilds.org"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("This guide describes how to reproduce Wasabi's builds.")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#_1-assert-correct-environment"}},[t._v("1. Assert Correct Environment")])]),a("li",[a("a",{attrs:{href:"#_2-reproduce-builds"}},[t._v("2. Reproduce Builds")])]),a("li",[a("a",{attrs:{href:"#_3-verify-builds"}},[t._v("3. Verify Builds")]),a("ul",[a("li",[a("a",{attrs:{href:"#windows"}},[t._v("Windows")])]),a("li",[a("a",{attrs:{href:"#linux-macos"}},[t._v("Linux & macOS")])])])])])]),a("p"),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"_1-assert-correct-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-assert-correct-environment"}},[t._v("#")]),t._v(" 1. Assert Correct Environment")]),t._v(" "),a("p",[t._v("In order to reproduce Wasabi's builds you need "),a("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git"),a("OutboundLink")],1),t._v(", "),a("a",{attrs:{href:"https://www.microsoft.com/en-us/software-download/windows10ISO",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows 10"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://www.microsoft.com/net/download",target:"_blank",rel:"noopener noreferrer"}},[t._v(".NET Core 3.1 SDK"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Optional for privacy")]),t._v(" "),a("p",[t._v("You can disable .NET's telemetry, which is sending some usage information to Microsoft, by typing:")]),t._v(" "),a("p",[a("code",[t._v("export DOTNET_CLI_TELEMETRY_OPTOUT=1")]),t._v(" on Linux and macOS.")]),t._v(" "),a("p",[a("code",[t._v("setx DOTNET_CLI_TELEMETRY_OPTOUT 1")]),t._v(" to disable it permanently on Windows.")])]),t._v(" "),a("h2",{attrs:{id:"_2-reproduce-builds"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-reproduce-builds"}},[t._v("#")]),t._v(" 2. Reproduce Builds")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/zkSNACKs/WalletWasabi.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" WalletWasabi/WalletWasabi.Packager/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("hash of the release"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" // This works from "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(".3 release, https://github.com/zkSNACKs/WalletWasabi/releases\ndotnet restore\ndotnet build\ndotnet run -- --onlybinaries\n")])])]),a("p",[t._v("This will build our binaries for Windows, macOS and Linux from source code and open them in a file explorer for you.")]),t._v(" "),a("p",[a("img",{attrs:{src:"/DeterministicBuildFolders.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"_3-verify-builds"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-verify-builds"}},[t._v("#")]),t._v(" 3. Verify Builds")]),t._v(" "),a("p",[t._v("You can compare your built binaries with the binaries distributed on the "),a("a",{attrs:{href:"https://wasabiwallet.io/#download",target:"_blank",rel:"noopener noreferrer"}},[t._v("Wasabi website"),a("OutboundLink")],1),t._v(".\nIn order to end-to-end verify all the downloaded packages you need a Windows, a Linux, and a macOS machine.")]),t._v(" "),a("p",[a("img",{attrs:{src:"/DeterministicBuildFiles.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[t._v("#")]),t._v(" Windows")]),t._v(" "),a("p",[t._v("After you installed Wasabi from the "),a("code",[t._v(".msi")]),t._v(" package downloaded from the website, it will be in "),a("code",[t._v("C:\\Program Files\\WasabiWallet")]),t._v(" folder.\nYou can compare it with your build:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" WalletWasabi.Gui"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("bin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("dist\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" --no-index win7-x64 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C:\\Program Files\\WasabiWallet"')]),t._v("\n")])])]),a("h3",{attrs:{id:"linux-macos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-macos"}},[t._v("#")]),t._v(" Linux & macOS")]),t._v(" "),a("p",[t._v("You can use the "),a("code",[t._v("Windows Subsystem for Linux")]),t._v(" to verify all the packages in one go.\nInstall the "),a("code",[t._v(".deb")]),t._v(" package and extract the "),a("code",[t._v("tar.gz")]),t._v(" and "),a("code",[t._v(".dmg")]),t._v(" packages, then compare them with your build.")]),t._v(" "),a("p",[t._v("After installing "),a("code",[t._v("Windows Subsystem for Linux")]),t._v(", just type "),a("code",[t._v("wsl")]),t._v(" in explorer where your downloaded and built packages are located.")]),t._v(" "),a("p",[a("img",{attrs:{src:"/DeterministicBuildAll.png",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"deb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deb"}},[t._v("#")]),t._v(" .deb")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" dpkg -i Wasabi-1.1.11.1.deb\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" --no-index linux-x64/ /usr/local/bin/wasabiwallet/\n")])])]),a("h4",{attrs:{id:"tar-gz"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tar-gz"}},[t._v("#")]),t._v(" .tar.gz")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -pxzf WasabiLinux-1.1.11.1.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" --no-index linux-x64/ WasabiLinux-1.1.11.1\n")])])]),a("h4",{attrs:{id:"dmg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dmg"}},[t._v("#")]),t._v(" .dmg")]),t._v(" "),a("p",[t._v("You will need to install "),a("a",{attrs:{href:"https://www.7-zip.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("7z"),a("OutboundLink")],1),t._v(" (or something else) to extract the "),a("code",[t._v(".dmg")]),t._v(": "),a("code",[t._v("sudo apt install p7zip-full")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("7z x Wasabi-1.1.11.1.dmg -oWasabiOsx\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" --no-index osx-x64/ WasabiOsx/Wasabi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Wallet.App/Contents/MacOS/\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);