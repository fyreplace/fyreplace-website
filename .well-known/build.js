const { writeFile } = require("fs")
const { join } = require("path")
const appSiteAssociation = require("./apple-app-site-association.template.json")

const iosAppPrefix = process.env.IOS_APP_PREFIX || ""

function prefixed(apps) {
    return apps.map(app => iosAppPrefix + "." + app)
}

for (const detail of appSiteAssociation.applinks.details) {
    detail.appIDs = prefixed(detail.appIDs)
}

appSiteAssociation.webcredentials.apps = prefixed(appSiteAssociation.webcredentials.apps)
appSiteAssociation.appclips.apps = prefixed(appSiteAssociation.appclips.apps)

writeFile(join(__dirname, "apple-app-site-association"), JSON.stringify(appSiteAssociation, null, 4), () => undefined)
