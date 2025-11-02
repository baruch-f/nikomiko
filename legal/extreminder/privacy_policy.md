# Privacy Policy for ExtReminder

**Last Updated: November 2, 2025**

## Introduction

Welcome to ExtReminder ("App"). We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains what information the App processes, how it is used, and your choices. ExtReminder is a reminder and scheduling application; it does not maintain cloud servers for user data.

## Information We Process

- **Reminder Data (Local Only)**: Titles, notes, schedules, recurrence, categories, and app settings you create. Stored locally on your device.
- **Notifications and Scheduling Data (Local Only)**: Alarm times, notification channels, and scheduling metadata required to trigger reminders. Stored locally.
- **Purchase Information**: When you make an in‑app purchase via Google Play Billing, Google provides purchase state and tokens necessary to unlock features. We do not receive payment card data.
- **Device and Ad Data (via Ad SDKs)**: Mobile advertising identifiers, coarse device information (e.g., model, OS version), and ad interaction events collected by third‑party ad providers to show and measure ads.

We do not create user accounts and do not operate our own backend to collect or store your personal data.

## Third‑Party SDKs and Services

The App integrates the following SDKs strictly to provide core functionality and monetization:

- **Google AdMob (google_mobile_ads)**: Delivers ads and measures performance. May collect device identifiers (e.g., AAID), approximate location, and ad interaction signals for ad delivery, fraud prevention, and reporting. See Google’s Privacy Policy: https://policies.google.com/privacy and AdMob help on data use.
- **Google Play Billing (in_app_purchase)**: Processes purchases through Google Play. We receive purchase status and product identifiers from Google to unlock content; payment details remain with Google. See Google Play Terms and Privacy.
- **Flutter Local Notifications (flutter_local_notifications)**: Schedules notifications locally. No data is sent off‑device.
- **WorkManager (workmanager)**: Runs background tasks to maintain schedules. No additional personal data is transmitted.
- **Share Plus (share_plus)**: Invokes the system share sheet only when you choose to share; no persistent data is collected by the App.
- **Timezone/Path Provider/Shared Preferences**: Utilities for timezone handling and local storage; data remains on device.

We do not use Firebase Analytics, Facebook SDK, or similar analytics libraries in this App.

## Notifications and Exact Alarms

To deliver time‑critical reminders, the App may request access to schedule exact alarms (Android’s "Schedule Exact Alarm" special access). Key points:

- **Consent Required**: Exact alarms are disabled by default. You can grant or revoke access anytime in system settings (Special app access > Alarms & reminders).
- **Behavior Without Access**: If not granted, reminders are delivered using inexact or next‑best scheduling; delivery time may drift due to battery optimizations (Doze/App Standby).
- **Transparency**: The App requests this access solely to trigger your reminders at chosen times. It is not used for background tracking.
- **Notifications Control**: You can disable or adjust notification channels in the system settings for ExtReminder.

## Data Storage and Retention

- Reminder and scheduling data is stored only on your device. Deleting the app or clearing its data removes your reminders and settings.
- Purchase entitlements may be restorable from Google Play after reinstall if supported by Play Billing.

## Your Choices

- **Ads Personalization**: You can opt out of personalized advertising via your device’s ad settings (reset/limit ad ID). AdMob will honor applicable choices.
- **Notifications and Alarms**: Manage notification channels and exact alarm access in the system settings.
- **Manage Data**: Edit or delete reminders in the App; clear app data in system settings to remove local data entirely.

## Children’s Privacy

The App is not directed to children under 13, and we do not knowingly collect personal information from children.

## Security

We use the platform’s local storage and notification APIs. Protect your device with a passcode and keep your OS updated to help safeguard local data.

## International Transfers

We do not operate our own servers. Third‑party providers (e.g., Google) may process data on servers outside your country per their policies.

## Changes to This Policy

We may update this Policy as the App or regulations evolve. Updates will be posted here with an updated "Last Updated" date.

## Contact Us

For privacy questions or requests, please use the same developer contact email and website published on the ExtReminder Google Play listing under "Developer contact".
