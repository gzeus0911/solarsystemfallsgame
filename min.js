window.addEventListener("load", function() {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    console.log("User Timezone:", userTimeZone);

    if (true) {
        Android.start();
    }
});
