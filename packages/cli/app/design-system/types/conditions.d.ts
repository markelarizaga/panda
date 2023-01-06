export type Condition = "_hover" | "_focus" | "_focusWithin" | "_focusVisible" | "_disabled" | "_active" | "_visited" | "_target" | "_readOnly" | "_readWrite" | "_empty" | "_checked" | "_enabled" | "_expanded" | "_highlighted" | "_before" | "_after" | "_firstLetter" | "_firstLine" | "_marker" | "_selection" | "_file" | "_backdrop" | "_first" | "_last" | "_only" | "_even" | "_odd" | "_firstOfType" | "_lastOfType" | "_onlyOfType" | "_peerFocus" | "_peerHover" | "_peerActive" | "_peerFocusWithin" | "_peerFocusVisible" | "_peerDisabled" | "_peerChecked" | "_peerInvalid" | "_peerExpanded" | "_peerPlaceholderShown" | "_groupFocus" | "_groupHover" | "_groupActive" | "_groupFocusWithin" | "_groupFocusVisible" | "_groupDisabled" | "_groupChecked" | "_groupExpanded" | "_groupInvalid" | "_indeterminate" | "_required" | "_valid" | "_invalid" | "_autofill" | "_inRange" | "_outOfRange" | "_placeholder" | "_placeholderShown" | "_pressed" | "_selected" | "_default" | "_optional" | "_open" | "_fullscreen" | "_loading" | "_currentPage" | "_currentStep" | "_motionReduce" | "_motionSafe" | "_print" | "_landscape" | "_portrait" | "_dark" | "_light" | "_osDark" | "_osLight" | "_highConstrast" | "_lessContrast" | "_moreContrast" | "_ltr" | "_rtl" | "_scrollbar" | "_scrollbarThumb" | "_scrollbarTrack" | "sm" | "smOnly" | "smDown" | "md" | "mdOnly" | "mdDown" | "lg" | "lgOnly" | "lgDown" | "xl" | "xlOnly" | "xlDown" | "2xl" | "2xlOnly" | "smToMd" | "smToLg" | "smToXl" | "smTo2xl" | "mdToLg" | "mdToXl" | "mdTo2xl" | "lgToXl" | "lgTo2xl" | "xlTo2xl" | "base"

export type Conditions = Record<Condition, string>