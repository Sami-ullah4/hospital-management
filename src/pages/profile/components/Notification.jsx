import React, { useState } from "react";

const Notification = () => {
  const [notifications, setNotifications] = useState({
    email: {
      dailyNews: true,
      weeklyDigest: false,
      articleRecommendations: true,
    },
    push: {
      breakingNews: true,
      newArticles: false,
      subscriptionReminders: true,
    },
    inApp: {
      dailyNews: true,
      subscriptionReminders: false,
    },
  });

  const ToggleSwitch = ({ enabled, toggle }) => (
    <button
      onClick={toggle}
      className={`w-11 h-6 rounded-full p-1 transition-colors ${
        enabled ? "bg-[#43B3E5]" : "bg-[#D6E0E4]"
      }`}
    >
      <div
        className={`w-4 h-4 rounded-full bg-white transform transition-transform ${
          enabled ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );

  return (
    <>
      {/* Main content */}
      <div className=" flex flex-col  gap-7 w-full lg:w-[70%] px-6 lg:px-3 m-auto py-6">
        <h1 className="font-[600] text-[32px] leading-[130%] text-[#002A3C]">
          Notification Settings
        </h1>
        <p className="text-[#375E6C] text-lg mb-6">
          Manage your notifications preferences.
        </p>

        {/* Email Notifications Card */}
        <div className="p-6 rounded-[16px] border border-[#D6E0E4]">
          <h2 className="font-[600] text-[24px] text-[#002A3C] mb-4">
            Email Notifications
          </h2>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-[600] text-[18px] text-[#002A3C]">
                    Daily News Updates
                  </h3>
                  <p className="text-[#375E6C] mt-1">
                    Receive daily summaries of the latest medical news.
                  </p>
                </div>
                <ToggleSwitch
                  enabled={notifications.email.dailyNews}
                  toggle={() =>
                    setNotifications((prev) => ({
                      ...prev,
                      email: {
                        ...prev.email,
                        dailyNews: !prev.email.dailyNews,
                      },
                    }))
                  }
                />
              </div>
            </div>
            <hr className="border-[#D6E0E4]" />

            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-[600] text-[18px] text-[#002A3C]">
                  Weekly Digest
                </h3>
                <p className="text-[#375E6C] mt-1">
                  Get a weekly roundup of top articles and insights.
                </p>
              </div>
              <ToggleSwitch
                enabled={notifications.email.weeklyDigest}
                toggle={() =>
                  setNotifications((prev) => ({
                    ...prev,
                    email: {
                      ...prev.email,
                      weeklyDigest: !prev.email.weeklyDigest,
                    },
                  }))
                }
              />
            </div>
            <hr className="border-[#D6E0E4]" />

            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-[600] text-[18px] text-[#002A3C]">
                  Article Recommendations
                </h3>
                <p className="text-[#375E6C] mt-1">
                  Personalized article suggestions based on your interests.
                </p>
              </div>
              <ToggleSwitch
                enabled={notifications.email.articleRecommendations}
                toggle={() =>
                  setNotifications((prev) => ({
                    ...prev,
                    email: {
                      ...prev.email,
                      articleRecommendations:
                        !prev.email.articleRecommendations,
                    },
                  }))
                }
              />
            </div>
          </div>
        </div>

        {/* Push Notifications Card */}
        <div className="p-6 rounded-[16px] border border-[#D6E0E4]">
          <h2 className="font-[600] text-[24px] text-[#002A3C] mb-4">
            Push Notifications
          </h2>

          <div className="space-y-6">
            {[
              {
                title: "Breaking News Alerts",
                description: "Instant notifications for major medical news.",
                state: notifications.push.breakingNews,
                key: "breakingNews",
              },
              {
                title: "New Article Alerts",
                description: "Be notified when new articles are published.",
                state: notifications.push.newArticles,
                key: "newArticles",
              },
              {
                title: "Subscription Reminders",
                description: "Reminders for subscription renewals and updates.",
                state: notifications.push.subscriptionReminders,
                key: "subscriptionReminders",
              },
            ].map((item, index) => (
              <React.Fragment key={item.key}>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-[600] text-[18px] text-[#002A3C]">
                      {item.title  } {console.log(item.title)}
                    </h3>
                    <p className="text-[#375E6C] mt-1">{item.description}</p>
                  </div>
                  <ToggleSwitch
                    enabled={item.state}
                    toggle={() =>
                      setNotifications((prev) => ({
                        ...prev,
                        push: {
                          ...prev.push,
                          [item.key]: !prev.push[item.key],
                        },
                      }))
                    }
                  />
                </div>
                {index < 2 && <hr className="border-[#D6E0E4]" />}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* In-App Notifications Card */}
        <div className="p-6 rounded-[16px] border border-[#D6E0E4]">
          <h2 className="font-[600] text-[24px] text-[#002A3C] mb-4">
            In-App Notifications
          </h2>

          <div className="space-y-6">
            {[
              {
                title: "Daily News Updates",
                description: "Stay informed with daily news summaries.",
                state: notifications.inApp.dailyNews,
                key: "dailyNews",
              },
              {
                title: "Subscription Reminders",
                description: "Alerts for subscription renewals and updates.",
                state: notifications.inApp.subscriptionReminders,
                key: "subscriptionReminders",
              },
            ].map((item, index) => (
              <React.Fragment key={item.key}>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-[600] text-[18px] text-[#002A3C]">
                      {item.title}
                    </h3>
                    <p className="text-[#375E6C] mt-1">{item.description}</p>
                  </div>
                  <ToggleSwitch
                    enabled={item.state}
                    toggle={() =>
                      setNotifications((prev) => ({
                        ...prev,
                        inApp: {
                          ...prev.inApp,
                          [item.key]: !prev.inApp[item.key],
                        },
                      }))
                    }
                  />
                </div>
                {index < 1 && <hr className="border-[#D6E0E4]" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
