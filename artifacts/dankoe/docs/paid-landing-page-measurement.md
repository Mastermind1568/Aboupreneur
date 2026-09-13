# Paid landing-page measurement

The paid landing pages use the existing Google Tag Manager container. Do not add a second GTM or Google tag snippet.

## Events

| Event | When it fires | Key parameters |
| --- | --- | --- |
| `landing_page_view` | Variant A or B mounts | `landing_page_variant`, `campaign`, `ad_group`, `keyword`, `source`, `medium`, `has_gclid` |
| `landing_cta_click` | The hero CTA is clicked | The view parameters plus `cta_location` |
| `landing_form_started` | A valid form submit is attempted | The view parameters plus `selected_service` |
| `generate_lead` | Formspree confirms a successful submission | The view parameters plus `selected_service`, `form_provider` |
| `landing_form_failed` | Formspree or the network returns an error | The view parameters plus `selected_service`, `reason` |

Campaign values follow the Google Ads final URL convention:

- `utm_campaign` becomes `campaign`
- `utm_content` becomes `ad_group`
- `utm_term` becomes `keyword`
- `utm_source` and `utm_medium` become `source` and `medium`
- `gclid` is submitted to Formspree for lead-level attribution, while analytics only receives `has_gclid`

No name, email address, or business name is pushed to GTM, GA4, or Umami.

## GTM

1. Preview the existing `GT-MKRZMHFV` container and accept analytics consent in the Cookiebot banner.
2. Confirm each event appears once in the Tag Assistant data layer.
3. Create one GA4 Event tag that uses the data-layer event name, or separate GA4 Event tags for the five events above.
4. Add Data Layer Variables for the parameters in the table and pass them as GA4 event parameters.
5. Trigger each tag with a Custom Event trigger matching its exact event name.
6. Keep the existing Cookiebot consent checks on the GA4 tags. Do not add another consent-default or GTM snippet.
7. Publish the container only after the Preview session shows one event per action.

## GA4

1. In DebugView, open:
   - `/services/variant-a?utm_source=google&utm_medium=cpc&utm_campaign=test&utm_content=test-ad-group&utm_term=test-keyword`
   - `/services/variant-b?utm_source=google&utm_medium=cpc&utm_campaign=test&utm_content=test-ad-group&utm_term=test-keyword`
2. Confirm the page-view and CTA events contain the expected variant and campaign parameters.
3. Submit a test inquiry and confirm `generate_lead` appears only after the success message is shown.
4. Mark `generate_lead` as a key event.
5. Create event-scoped custom dimensions for `landing_page_variant`, `campaign`, `ad_group`, and `keyword`. Add `selected_service` if service-level reporting is useful.
6. Build an Exploration comparing `generate_lead` by campaign, ad group, keyword, and landing-page variant.

## Google Ads

1. Link the correct GA4 property to Google Ads and enable auto-tagging.
2. Import the GA4 `generate_lead` key event into Google Ads.
3. Set it as **Primary** and use it for bidding. Keep page views, CTA clicks, and form starts as secondary observation events.
4. Use a final URL suffix such as:

   `utm_source=google&utm_medium=cpc&utm_campaign={campaignid}&utm_content={adgroupid}&utm_term={keyword}`

5. Submit one test lead from an ad test URL. Confirm the Formspree message includes the UTM fields, landing-page variant, and `gclid` when Google supplies one.
6. Allow normal reporting latency, then compare Google Ads conversions with GA4 `generate_lead` counts. Small differences can result from consent and attribution rules.