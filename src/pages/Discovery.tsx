
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { SEO } from "../components/SEO";

export default function Discovery() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "discovery" });
            cal("ui", { "cssVarsPerTheme": { "light": { "cal-brand": "#000000" }, "dark": { "cal-brand": "#ffffff" } }, "hideEventTypeDetails": false, "layout": "column_view" });
        })();
    }, [])
    return (
        <div className="w-full max-w-[1200px] mx-auto px-6">
            <SEO
                title="Discovery Call"
                description="Book a discovery call with our team to discuss your project."
                url="https://usebuildify.com/discovery"
            />
            <Cal namespace="discovery"
                calLink="alefyi/discovery"
                style={{ width: "100%", height: "100%", overflow: "scroll" }}
                config={{ "layout": "column_view", "useSlotsViewOnSmallScreen": "true" }}
            />
        </div>
    );
};
