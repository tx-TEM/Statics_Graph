export class EstatManager {
    apiVersion = "3.0"
    baseUrl = `http://api.e-stat.go.jp/rest/${this.apiVersion}/app/json`
    appId = "72f197f27cdf99cab4456b06dc814b92b1a3bf57"

    constructUrl(statsDataId: string) {
        const url = new URL(`${this.baseUrl}/getStatsData`);
        url.searchParams.append("appId", this.appId);
        url.searchParams.append("lang", "J");
        url.searchParams.append("statsDataId", statsDataId);
        url.searchParams.append("metaGetFlg", "Y");
        url.searchParams.append("cntGetFlg", "N");
        url.searchParams.append("explanationGetFlg", "Y");
        url.searchParams.append("annotationGetFlg", "Y");
        url.searchParams.append("sectionHeaderFlg", "1");

        return url.toString()
    }

    fetchData(statsDataId: string) {
        console.log(this.constructUrl(statsDataId));
        fetch(this.constructUrl(statsDataId))
            .then(function(data) {
                return data.json();
            })
            .then(function(json) {
                const statistical_title = json["GET_STATS_DATA"]["STATISTICAL_DATA"]["TABLE_INF"]["STATISTICS_NAME"];
                console.log(statistical_title);
            })
    }
}