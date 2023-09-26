import { memo, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faDiscord,
   faMedium,
   faTelegram,
   faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import Section from "../components/Section";
import Spacer from "../components/Spacer";
import GetOnButton from "../components/GetOnButton";
import Banner from "../components/Banner";
import Button from "../components/Button";
import Card from "../components/Card";
import DeFiCalculator from "../components/DeFiCalculator";
import Tabs from "../components/Tabs";

import render1 from "../assets/render1.png";
import Hands from "../assets/hands.png";
import skyWithStars1 from "../assets/skyWithStars1.png";
import yourDeFiHelper from "../assets/yourDeFiHelper.png";
import sniping from "../assets/sniping.png";
import copyTrading from "../assets/copyTrading.png";
import antiMev from "../assets/antiMev.png";
import limitOrders from "../assets/limitOrders.png";
import advancedSLTP from "../assets/advancedSLTP.png";
import support from "../assets/support.png";
import GMXio from "../assets/GMXio.png";
import secretIntegration from "../assets/secretIntegration.png";
import clouds from "../assets/clouds.png";
import instantLPMatching from "../assets/dl1.svg";
import supportedNetworks from "../assets/supportedNetworks.png";
import setUpLaunch from "../assets/setUpLaunch.png";
import setUpWallets from "../assets/setUpWallets.png";
import setUpPaste from "../assets/setUpPaste.png";
import setUpBuySell from "../assets/setUpBuySell.png";
import setUpTrack from "../assets/setUpTrack.png";

const setUpImages = [setUpLaunch, setUpWallets, setUpPaste, setUpBuySell, setUpTrack];

function Home() {
   const [selectedSetUpTab, setSelectedSetUpTab] = useState(0);

   const statsSectionStyle = useMemo(
      () => ({
         marginTop: 70,
      }),
      [],
   );

   return (
      <>
         <Section type="hero" widthLimit={false}>
            <div className="heroSectionBackgroundImage">
               <img src={skyWithStars1} alt="Sky with stars" />
            </div>
            <Section type="blank">
               <div className="gridHolder x2">
                  <div className="flexHolder vertical aCenter">
                     <h1 className="mainText nUnder">The Most Advanced Crypto Bot</h1>
                     <p className="normalText nUnder">
                        Bringing Sniping, Tracking, Trading, Copy Trading and More
                        directly to your Messaging Apps
                     </p>
                     <Spacer height={10} />
                     <div className="flexHolder">
                        <GetOnButton type="telegram" defaultLeftInset />
                        <GetOnButton type="discord" />
                     </div>
                  </div>
                  <div className="heroSectionImage">
                     <img src={Hands} alt="WagieBot hands" />
                  </div>
               </div>
            </Section>
         </Section>
         <Section withBackground="black" style={statsSectionStyle}>
            <div
               className="statsBox"
               onClick={() => window.open("https://stats.wagiebot.com", "_black")}
            >
               <div>
                  <h1>10K+</h1>
                  <p>Unique Bot Users</p>
               </div>
               <div>
                  <h1>170K+</h1>
                  <p>Trades Made</p>
               </div>
               <div>
                  <h1>1.5M+</h1>
                  <p>Contracts Fetched</p>
               </div>
               <div>
                  <h1>20+</h1>
                  <p>Communities</p>
               </div>
            </div>
         </Section>
         <Section withBackground="black">
            <Spacer height={80} />
            <h1 className="mainTitle taCenter mobileTALeft">
               State-of-the-art infrastructure, processing requests on multiple networks
               in <span className="tcPrimary">milliseconds</span>.
            </h1>
            <img src={supportedNetworks} className="mainImage" alt="Supported networks" />
            <Spacer height={80} />

            <div className="gridHolder x2">
               <div>
                  <h1 className="mainText weUnder">Instant LP Matching</h1>
                  <p className="normalText">
                     WagieBot will instantly fetch the largest liquidity pool and present
                     it to you for easy access together with anti-rug and honeypot checks.
                  </p>
                  <Spacer height={20} />
                  <Button
                     text="Learn more"
                     openNewPage="https://docs.wagiebot.com/telegram/contract-pasting"
                     rightArrow
                     alignRight
                  />
               </div>
               <div className="cardImage">
                  <img src={instantLPMatching} alt="" />
               </div>
            </div>
            <Spacer height={80} />
            <div className="gridHolder x2">
               <div className="cardImage" id="setUp">
                  <div className="cardImageDecoration"></div>
                  <img src={setUpImages[selectedSetUpTab]} alt="Set up" />
               </div>
               <div>
                  <h1 className="mainText taRight mobileTALeft weUnder">Quick Setup</h1>
                  <Tabs
                     onChangeTab={setSelectedSetUpTab}
                     tabAlignment="right"
                     tabs={[
                        {
                           text: "Launch",
                           component: (
                              <p className="normalText">
                                 Get your WagieBot up and running in seconds. Send a
                                 message to the bot for instant access. No registration
                                 required.
                              </p>
                           ),
                        },
                        {
                           text: "Wallets",
                           component: (
                              <p className="normalText">
                                 Generate, import and delete encrypted multi-chain wallets
                                 directly in WagieBot.
                              </p>
                           ),
                        },
                        {
                           text: "Paste",
                           component: (
                              <p className="normalText">
                                 Send any token contract address to the bot and instantly
                                 retrieve all relevant data.
                              </p>
                           ),
                        },
                        {
                           text: "Buy/Sell",
                           component: (
                              <p className="normalText">
                                 Use Wagie's private nodes or built-in anti-mev to execute
                                 instantaneous buy/sell transactions through any supported
                                 dex on any supported chain.
                              </p>
                           ),
                        },
                        {
                           text: "Track",
                           component: (
                              <p className="normalText">
                                 Track any token, set up advanced orders such as limit
                                 orders, stop loss and take profit directly through
                                 WagieBot.
                              </p>
                           ),
                        },
                     ]}
                  />
               </div>
            </div>
            <Spacer height={80} />

            <h1 className="mainTitle" id="specializedFeatures">
               Specialized <span className="tcPrimary">Features</span>
            </h1>
            <div className="flexHolder x2">
               <Card
                  title="Sniping"
                  body="Featuring Method Sniping & Liquidity Sniping with Block Delays, Dead Blocks, Bribing, Anti-Rug and more. Set up your sniper and be amongst the first on any new token launch."
                  image={sniping}
                  id="Sniping"
                  onOpenNewPage="https://docs.wagiebot.com/telegram/snipers"
               />
               <Card
                  title="Copy Trading"
                  body="Automatically copy the trades of anyone on any of the supoorted chains. Adjust your settings and mimick every move the address you're copying makes."
                  image={copyTrading}
                  id="copyTrading"
                  onOpenNewPage="https://docs.wagiebot.com/telegram/copy-trading"
               />
            </div>
            <Spacer height={20} />
            <div className="flexHolder x2">
               <Card
                  title="Anti-Mev"
                  body="Avoid sandwich and front running bots with Wagie's built-in Anti-Mev protection. Send private transactions with high slippage without losing money."
                  image={antiMev}
                  id="antiMev"
                  onOpenNewPage="https://docs.wagiebot.com/telegram/wallets/on-paste-wallet-settings#buy-sell-settings"
               />
               <Card
                  title="Limit Orders"
                  body="Profit from volatility on the go. Get your perfect entries using Wagie's Limit Orders."
                  image={limitOrders}
                  id="limitOrders"
                  onOpenNewPage="https://docs.wagiebot.com/telegram/limit-orders"
               />
            </div>
            <Spacer height={20} />
            <div className="flexHolder x2">
               <Card
                  title="Advanced SL/TP"
                  body="Create Advanced Stop-Loss and Take-Profits presets or use custom settings per trade basis. Wagie will check if your order is nearing SL/TP every block."
                  image={advancedSLTP}
                  id="advancedSLTP"
                  onOpenNewPage="https://docs.wagiebot.com/telegram/trade-tracker/stop-loss-and-take-profit-orders"
               />
               <Card
                  title="Support"
                  body="Description: Should any questions arise, our dedicated support staff is always ready to take care of any issues."
                  image={support}
                  id="support"
                  onOpenNewPage="https://t.me/wagiebotportal"
               />
            </div>
            <Spacer height={80} />

            <h1 className="mainTitle">
               Your <span className="tcPrimary">DeFi</span> Helper
            </h1>
            <p className="normalText" style={{ maxWidth: 600 }}>
               WagieBot tokens reduce your fees by up to 60%, enhance your bot's abilities
               accross all features, give access to our private alpha and more.
            </p>
            <div className="flexHolder aCenter">
               <div className="cardImage" style={{ maxWidth: 600 }} id="yourDeFiHelper">
                  <div className="cardImageDecoration"></div>
                  <img src={yourDeFiHelper} alt="" />
               </div>
            </div>
            <Spacer height={40} />
            <DeFiCalculator />
            <Spacer height={80} />

            <Banner size="big" backgroundImage={render1}>
               <h1 className="mainTitle">Cutting-Edge Technology</h1>
               <p className="normalText nUnder" style={{ maxWidth: 400 }}>
                  WagieBot utilizes a custom-built architecture capable of handling tens
                  of thousands requests per second bundled with a powerful infrastructure
                  consisting of private nodes and self-hosted adapters, making it the
                  fastest bot on the market.
               </p>
               <Spacer height={50} />
               <Button
                  text="Learn more"
                  openNewPage="https://docs.wagiebot.com/general/welcome-to-wagiebot"
                  rightArrow
               />
            </Banner>
            <Spacer height={80} />

            <h1 className="mainTitle">Protocol Integrations</h1>
            <div className="flexHolder x2">
               <Card
                  title="GMX.io"
                  body="Go long or short with up to 50x leverage using the leading decentralized perpetuals exchange directly through WagieBot."
                  image={GMXio}
                  id="GMXio"
                  onOpenNewPage="https://docs.wagiebot.com/telegram/gmx"
               />
               <Card
                  title="?"
                  body="??? ??????? ???? ?? ?????? ?? ?? ???? ??? ????? ?????????? ?????? ??? ??? ??? ???????? ???? ????????? ???????"
                  image={secretIntegration}
                  id="secretIntegration"
                  onOpenNewPage="https://docs.wagiebot.com/upcoming-features/soon-tm"
               />
            </div>
            <Spacer height={80} />

            <Banner size="big" backgroundImage={clouds}>
               <h1 className="mainTitle taCenter weUnder">Want to try WagieBot?</h1>
               <p className="normalText taCenter nUnder">Join the closed Beta now!</p>
               <Spacer height={70} />
               <div className="flexHolder aCenter tryOutButtons">
                  <GetOnButton type="telegram" />
                  <GetOnButton type="discord" />
               </div>
            </Banner>
            <Spacer height={80} />

            <h1 className="mainTitle taCenter">Join us</h1>
            <div className="flexHolder aCenter">
               <Link to="https://t.me/wagiebot" title="Telegram" target="_blank">
                  <FontAwesomeIcon className="mainIcon" icon={faTelegram} id="telegram" />
               </Link>
               <Link to="/discordComingSoon" title="Discord">
                  <FontAwesomeIcon className="mainIcon" icon={faDiscord} id="discord" />
               </Link>
               <Link to="https://medium.com/@wagiebot" title="Medium" target="_blank">
                  <FontAwesomeIcon className="mainIcon" icon={faMedium} id="medium" />
               </Link>
               <Link to="https://x.com/0xWagieBot" title="Twitter" target="_blank">
                  <FontAwesomeIcon className="mainIcon" icon={faTwitter} id="twitter" />
               </Link>
            </div>
            <Spacer height={80} />
         </Section>
      </>
   );
}

export default memo(Home);
