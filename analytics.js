// GA4 web stream shared by both formatters.
(() => {
    const measurementId = 'G-ZM6DF14CFQ';
    if (!/^G-[A-Z0-9]+$/.test(measurementId) || !/^https?:$/.test(location.protocol)) return;

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', measurementId, {
        page_location: location.origin + location.pathname,
        page_referrer: '',
        allow_google_signals: false,
        allow_ad_personalization_signals: false
    });
    window.trackTemplateSave = formatter => {
        if (!['lab_data_formatter', 'drug_formatter_2'].includes(formatter)) return;
        gtag('event', 'template_save', { formatter });
    };
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
    document.head.append(script);
})();
