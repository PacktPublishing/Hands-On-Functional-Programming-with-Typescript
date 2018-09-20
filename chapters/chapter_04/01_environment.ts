namespace environment_demo_1 {

    if (Promise && typeof Promise.all === "function") {
        // User Promise.all here...
    }

    if (
        navigator.userAgent.toLowerCase().indexOf('chrome') > -1 &&
        navigator.vendor.toLowerCase().indexOf("google") > -1
    ) {
        // Use Promise.all here...
    }

}
