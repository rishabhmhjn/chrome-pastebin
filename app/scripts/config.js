var PasteBin = PasteBin || {
    config: {}
};

// PasteBin.config.availableSyntax = {
//     "apl": true,
//     "asterisk": true,
//     "clike": true,
//     "clojure": true,
//     "cobol": true,
//     "coffeescript": true,
//     "commonlisp": true,
//     "css": true,
//     "d": true,
//     "diff": true,
//     "ecl": true,
//     "erlang": true,
//     "gas": true,
//     "gfm": true,
//     "go": true,
//     "groovy": true,
//     "haml": true,
//     "haskell": true,
//     "haxe": true,
//     "htmlembedded": true,
//     "htmlmixed": true,
//     "http": true,
//     "jade": true,
//     "javascript": true,
//     "jinja2": true,
//     "less": true,
//     "livescript": true,
//     "lua": true,
//     "markdown": true,
//     "meta.js": true,
//     "mirc": true,
//     "nginx": true,
//     "ntriples": true,
//     "ocaml": true,
//     "pascal": true,
//     "perl": true,
//     "php": true,
//     "pig": true,
//     "properties": true,
//     "python": true,
//     "q": true,
//     "r": true,
//     "rpm": true,
//     "rst": true,
//     "ruby": true,
//     "rust": true,
//     "sass": true,
//     "scheme": true,
//     "shell": true,
//     "sieve": true,
//     "smalltalk": true,
//     "smarty": true,
//     "smartymixed": true,
//     "sparql": true,
//     "sql": true,
//     "stex": true,
//     "tcl": true,
//     "tiddlywiki": true,
//     "tiki": true,
//     "turtle": true,
//     "vb": true,
//     "vbscript": true,
//     "velocity": true,
//     "verilog": true,
//     "xml": true,
//     "xquery": true,
//     "yaml": true,
//     "z80": true
// };



PasteBin.config.syntaxOptions = [{
    "name": "C",
    "value": "c"
}, {
    "name": "coffeeSCript",
    "value": "coffeescript"
}, {
    "name": "CSS",
    "value": "css"
}, {
    "name": "C++",
    "value": "cpp"
}, {
    "name": "htmL",
    "VAlue": "html4strict"
}, {
    "name": "HTML 5",
    "value": "html5"
}, {
    "name": "java",
    "value": "java"
}, {
    "name": "javaSCripT",
    "value": "javascript"
}, {
    "name": "jqUery",
    "value": "jquery"
}, {
    "name": "MySQL",
    "value": "mysql"
}, {
    "name": "objective C",
    "value": "objc"
}, {
    "name": "PHP",
    "value": "php"
}, {
    "name": "Plain Text",
    "value": "text"
}, {
    "name": "PYthon",
    "value": "python"
}, {
    "name": "ruby",
    "value": "ruby"
}, {
    "name": "XML",
    "value": "xml"
}, {
    "name": "YAML",
    "value": "yaml"
}, {
    "name": "----",
    "value": "dummmy",
    "disabled": true
}, {
    "name": "4CS",
    "value": "4cs"
}, {
    "name": "6502 ACME CRoSs assEmbler",
    "value": "6502acme"
}, {
    "name": "6502 Kick ASsembLer",
    "value": "6502kickass"
}, {
    "name": "6502 TASM/64TASS",
    "value": "6502tasm"
}, {
    "name": "ABAP",
    "value": "abap"
}, {
    "name": "actionSCript",
    "value": "actionscript"
}, {
    "name": "actionScRipt 3",
    "value": "actionscript3"
}, {
    "name": "ada",
    "value": "ada"
}, {
    "name": "ALGOL 68",
    "value": "algol68"
}, {
    "name": "APache LOg",
    "value": "apache"
}, {
    "name": "appleSCript",
    "value": "applescript"
}, {
    "name": "apt SoURCeS",
    "value": "apt_sources"
}, {
    "name": "ARM",
    "value": "arm"
}, {
    "name": "ASM (NASM)",
    "value": "asm"
}, {
    "name": "ASP",
    "value": "asp"
}, {
    "name": "asymPtote",
    "value": "asymptote"
}, {
    "name": "autoconf",
    "value": "autoconf"
}, {
    "name": "autohOtkey",
    "value": "autohotkey"
}, {
    "name": "AUtoiT",
    "value": "autoit"
}, {
    "name": "AviSynth",
    "value": "avisynth"
}, {
    "name": "awk",
    "value": "awk"
}, {
    "name": "bASCOM AVR",
    "value": "bascomavr"
}, {
    "name": "bash",
    "value": "bash"
}, {
    "name": "BasIc4gl",
    "value": "basic4gl"
}, {
    "name": "BIbtEx",
    "value": "bibtex"
}, {
    "name": "blitz basic",
    "value": "blitzbasic"
}, {
    "name": "BNF",
    "value": "bnf"
}, {
    "name": "BOO",
    "value": "boo"
}, {
    "name": "brAinfuck",
    "value": "bf"
}, {
    "name": "C for Macs",
    "value": "c_mac"
}, {
    "name": "C intermediatE language",
    "value": "cil"
}, {
    "name": "C#",
    "value": "csharp"
}, {
    "name": "C++ (with QT extensions)",
    "value": "cpp-qt"
}, {
    "name": "c: loadRunNer",
    "value": "c_loadrunner"
}, {
    "name": "CAD DCL",
    "value": "caddcl"
}, {
    "name": "CAD LiSp",
    "value": "cadlisp"
}, {
    "name": "CFDG",
    "value": "cfdg"
}, {
    "name": "chaiSCripT",
    "value": "chaiscript"
}, {
    "name": "ClOjure",
    "value": "clojure"
}, {
    "name": "CLone C",
    "value": "klonec"
}, {
    "name": "CloNe c++",
    "value": "klonecpp"
}, {
    "name": "CMake",
    "value": "cmake"
}, {
    "name": "COBOL",
    "value": "cobol"
}, {
    "name": "coLdfusion",
    "value": "cfm"
}, {
    "name": "CueSheet",
    "value": "cuesheet"
}, {
    "name": "D",
    "value": "d"
}, {
    "name": "DCL",
    "value": "dcl"
}, {
    "name": "DCPU-16",
    "value": "dcpu16"
}, {
    "name": "DCS",
    "value": "dcs"
}, {
    "name": "DElphi",
    "value": "delphi"
}, {
    "name": "DeLphi prIsm (OxYgene)",
    "value": "oxygene"
}, {
    "name": "diff",
    "value": "diff"
}, {
    "name": "DIV",
    "value": "div"
}, {
    "name": "DOS",
    "value": "dos"
}, {
    "name": "DOT",
    "value": "dot"
}, {
    "name": "E",
    "value": "e"
}, {
    "name": "ecMASCRIPT",
    "value": "ecmascript"
}, {
    "name": "EIffel",
    "value": "eiffel"
}, {
    "name": "Email",
    "value": "email"
}, {
    "name": "EPC",
    "value": "epc"
}, {
    "name": "ERlang",
    "value": "erlang"
}, {
    "name": "F#",
    "value": "fsharp"
}, {
    "name": "FAlcon",
    "value": "falcon"
}, {
    "name": "Fo language",
    "value": "fo"
}, {
    "name": "formuLa One",
    "value": "f1"
}, {
    "name": "FoRtran",
    "value": "fortran"
}, {
    "name": "freeBasiC",
    "value": "freebasic"
}, {
    "name": "freeSWitcH",
    "value": "freeswitch"
}, {
    "name": "GAMBAS",
    "value": "gambas"
}, {
    "name": "gamE maker",
    "value": "gml"
}, {
    "name": "GDB",
    "value": "gdb"
}, {
    "name": "GEnero",
    "value": "genero"
}, {
    "name": "Genie",
    "value": "genie"
}, {
    "name": "GeTteXt",
    "value": "gettext"
}, {
    "name": "Go",
    "value": "go"
}, {
    "name": "GRoovy",
    "value": "groovy"
}, {
    "name": "GwBaSic",
    "value": "gwbasic"
}, {
    "name": "HaSkell",
    "value": "haskell"
}, {
    "name": "haxe",
    "value": "haxe"
}, {
    "name": "HIceSt",
    "value": "hicest"
}, {
    "name": "HQ9 PlUs",
    "value": "hq9plus"
}, {
    "name": "icon",
    "value": "icon"
}, {
    "name": "IDL",
    "value": "idl"
}, {
    "name": "INi file",
    "value": "ini"
}, {
    "name": "inno script",
    "value": "inno"
}, {
    "name": "INTERCAL",
    "value": "intercal"
}, {
    "name": "IO",
    "value": "io"
}, {
    "name": "J",
    "value": "j"
}, {
    "name": "Java 5",
    "value": "java5"
}, {
    "name": "KiXtArt",
    "value": "kixtart"
}, {
    "name": "Latex",
    "value": "latex"
}, {
    "name": "LDIF",
    "value": "ldif"
}, {
    "name": "liberTY BASIC",
    "value": "lb"
}, {
    "name": "linden scripting",
    "value": "lsl2"
}, {
    "name": "lisp",
    "value": "lisp"
}, {
    "name": "LLVM",
    "value": "llvm"
}, {
    "name": "loco basiC",
    "value": "locobasic"
}, {
    "name": "LoGtalk",
    "value": "logtalk"
}, {
    "name": "LOL CoDe",
    "value": "lolcode"
}, {
    "name": "lotus FoRmulas",
    "value": "lotusformulas"
}, {
    "name": "lotus Script",
    "value": "lotusscript"
}, {
    "name": "LSCRipt",
    "value": "lscript"
}, {
    "name": "lua",
    "value": "lua"
}, {
    "name": "M68000 assembler",
    "value": "m68k"
}, {
    "name": "MaGiksf",
    "value": "magiksf"
}, {
    "name": "make",
    "value": "make"
}, {
    "name": "MapBasIc",
    "value": "mapbasic"
}, {
    "name": "MAtlAb",
    "value": "matlab"
}, {
    "name": "MIRC",
    "value": "mirc"
}, {
    "name": "MIX assembler",
    "value": "mmix"
}, {
    "name": "MoDula 2",
    "value": "modula2"
}, {
    "name": "MoDula 3",
    "value": "modula3"
}, {
    "name": "motoroLa 68000 HiSoft dEv",
    "value": "68000devpac"
}, {
    "name": "MPASM",
    "value": "mpasm"
}, {
    "name": "MXML",
    "value": "mxml"
}, {
    "name": "NAgios",
    "value": "nagios"
}, {
    "name": "newliSP",
    "value": "newlisp"
}, {
    "name": "nulLsoft installer",
    "value": "nsis"
}, {
    "name": "ObEron 2",
    "value": "oberon2"
}, {
    "name": "OBjeck PRogramming LAngua",
    "value": "objeck"
}, {
    "name": "ocalm BRief",
    "value": "ocaml-brief"
}, {
    "name": "OCaml",
    "value": "ocaml"
}, {
    "name": "OCtave",
    "value": "octave"
}, {
    "name": "oPENBSD PACKET FILTER",
    "value": "pf"
}, {
    "name": "opeNGL shading",
    "value": "glsl"
}, {
    "name": "Openoffice BASIC",
    "value": "oobas"
}, {
    "name": "OraCle 11",
    "value": "oracle11"
}, {
    "name": "OrAcle 8",
    "value": "oracle8"
}, {
    "name": "Oz",
    "value": "oz"
}, {
    "name": "ParAsaiL",
    "value": "parasail"
}, {
    "name": "PARI/GP",
    "value": "parigp"
}, {
    "name": "PAscal",
    "value": "pascal"
}, {
    "name": "PAWN",
    "value": "pawn"
}, {
    "name": "PCRE",
    "value": "pcre"
}, {
    "name": "per",
    "value": "per"
}, {
    "name": "perl",
    "value": "perl"
}, {
    "name": "Perl 6",
    "value": "perl6"
}, {
    "name": "pHP BRIeF",
    "value": "php-brief"
}, {
    "name": "Pic 16",
    "value": "pic16"
}, {
    "name": "pike",
    "value": "pike"
}, {
    "name": "pixel Bender",
    "value": "pixelbender"
}, {
    "name": "PL/SQL",
    "value": "plsql"
}, {
    "name": "postgResql",
    "value": "postgresql"
}, {
    "name": "POV-RAy",
    "value": "povray"
}, {
    "name": "power shell",
    "value": "powershell"
}, {
    "name": "powerBuIlder",
    "value": "powerbuilder"
}, {
    "name": "PrOftPD",
    "value": "proftpd"
}, {
    "name": "ProGress",
    "value": "progress"
}, {
    "name": "PRolog",
    "value": "prolog"
}, {
    "name": "propeRties",
    "value": "properties"
}, {
    "name": "ProVidex",
    "value": "providex"
}, {
    "name": "pureBasiC",
    "value": "purebasic"
}, {
    "name": "PyCon",
    "value": "pycon"
}, {
    "name": "Python for S60",
    "value": "pys60"
}, {
    "name": "q/kdb+",
    "value": "q"
}, {
    "name": "QBAsic",
    "value": "qbasic"
}, {
    "name": "R",
    "value": "rsplus"
}, {
    "name": "Rails",
    "value": "rails"
}, {
    "name": "REBOL",
    "value": "rebol"
}, {
    "name": "REG",
    "value": "reg"
}, {
    "name": "rexx",
    "value": "rexx"
}, {
    "name": "RObots",
    "value": "robots"
}, {
    "name": "RPM SpEc",
    "value": "rpmspec"
}, {
    "name": "RuBy gnUplot",
    "value": "gnuplot"
}, {
    "name": "SAS",
    "value": "sas"
}, {
    "name": "Scala",
    "value": "scala"
}, {
    "name": "SCheme",
    "value": "scheme"
}, {
    "name": "SCilab",
    "value": "scilab"
}, {
    "name": "SdlBasIc",
    "value": "sdlbasic"
}, {
    "name": "smalLtalk",
    "value": "smalltalk"
}, {
    "name": "SMarty",
    "value": "smarty"
}, {
    "name": "SPARK",
    "value": "spark"
}, {
    "name": "SPARQL",
    "value": "sparql"
}, {
    "name": "SQL",
    "value": "sql"
}, {
    "name": "stoneSCript",
    "value": "stonescript"
}, {
    "name": "systemVeRilog",
    "value": "systemverilog"
}, {
    "name": "T-SQL",
    "value": "tsql"
}, {
    "name": "TCL",
    "value": "tcl"
}, {
    "name": "TerA terM",
    "value": "teraterm"
}, {
    "name": "thinbasiC",
    "value": "thinbasic"
}, {
    "name": "typoSCripT",
    "value": "typoscript"
}, {
    "name": "UNicon",
    "value": "unicon"
}, {
    "name": "UnRealscRipt",
    "value": "uscript"
}, {
    "name": "UPC",
    "value": "ups"
}, {
    "name": "urbi",
    "value": "urbi"
}, {
    "name": "vala",
    "value": "vala"
}, {
    "name": "VB.NET",
    "value": "vbnet"
}, {
    "name": "Vedit",
    "value": "vedit"
}, {
    "name": "VeRiloG",
    "value": "verilog"
}, {
    "name": "VHDL",
    "value": "vhdl"
}, {
    "name": "VIM",
    "value": "vim"
}, {
    "name": "visual Pro log",
    "value": "visualprolog"
}, {
    "name": "visUalbasic",
    "value": "vb"
}, {
    "name": "visualFOxpro",
    "value": "visualfoxpro"
}, {
    "name": "whiteSpace",
    "value": "whitespace"
}, {
    "name": "WHOIS",
    "value": "whois"
}, {
    "name": "WinBatch",
    "value": "winbatch"
}, {
    "name": "XBAsic",
    "value": "xbasic"
}, {
    "name": "xorg confIg",
    "value": "xorg_conf"
}, {
    "name": "XPP",
    "value": "xpp"
}, {
    "name": "Z80 assembler",
    "value": "z80"
}, {
    "name": "ZXBASic",
    "value": "zxbasic"
}];



PasteBin.config.pasteExpirePeriod = [{
    "name": "Never",
    "value": "N"
}, {
    "name": "10 Minutes",
    "value": "10M"
}, {
    "name": "1 Hour",
    "value": "1H"
}, {
    "name": "1 Day",
    "value": "1D"
}, {
    "name": "1 Week",
    "value": "1W"
}, {
    "name": "2 Weeks",
    "value": "2W"
}, {
    "name": "1 Month",
    "value": "1M"
}];



PasteBin.config.pastePrivate = [{
    "name": "Public",
    "value": "0"
}, {
    "name": "Unlisted",
    "value": "1"
}, {
    "name": "Private",
    "value": "2"
}];


PasteBin.config.apiKey = "2e58ce27239e34a77c5ef65dbea8b24d";
PasteBin.config.apiPostUrl = "http://pastebin.com/api/api_post.php";
PasteBin.config.apiLoginUrl = "http://pastebin.com/api/api_login.php";