"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  CreditCard,
  FileText,
  HelpCircle,
  MinusCircle,
  PlusCircle,
} from "lucide-react";
import { useState } from "react";

export default function WalletPage() {
  const [balance, setBalance] = useState(0);
  const [purchasedCores, setPurchasedCores] = useState(0);
  const [receivedCores, setReceivedCores] = useState(0);
  const [spentCores, setSpentCores] = useState(0);

  // Total cores accumulated (for the progress display)
  const totalCores = 0;
  const targetCores = 100000;
  const progressPercentage = (totalCores / targetCores) * 100;

  return (
    <div className="flex h-full">
      <div className="flex-1 py-6 px-8 max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Core wallet</h1>
          <Button className="bg-white text-black hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
            Buy Cores
          </Button>
        </div>

        {/* Main statistics cards */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {/* Balance Card */}
          <Card className="bg-gray-900 text-white p-4 rounded-lg border-0">
            <div className="flex items-center gap-1 mb-4 text-gray-400">
              <div className="w-6 h-6 rounded-md bg-amber-400 flex items-center justify-center">
                <div className="w-3 h-3 bg-amber-600 rotate-45"></div>
              </div>
              <div className="flex items-center">
                Balance
                <HelpCircle className="w-4 h-4 ml-1 text-gray-500" />
              </div>
            </div>
            <div className="text-3xl font-bold">{balance}</div>
          </Card>

          {/* Purchased Card */}
          <Card className="bg-gray-900 text-white p-4 rounded-lg border-0">
            <div className="flex items-center gap-1 mb-4 text-gray-400">
              <CreditCard className="w-6 h-6 text-orange-400" />
              <div className="flex items-center">
                Purchased
                <HelpCircle className="w-4 h-4 ml-1 text-gray-500" />
              </div>
            </div>
            <div className="text-3xl font-bold">{purchasedCores}</div>
          </Card>

          {/* Received Card */}
          <Card className="bg-gray-900 text-white p-4 rounded-lg border-0">
            <div className="flex items-center gap-1 mb-4 text-gray-400">
              <PlusCircle className="w-6 h-6 text-green-400" />
              <div className="flex items-center">
                Received
                <HelpCircle className="w-4 h-4 ml-1 text-gray-500" />
              </div>
            </div>
            <div className="text-3xl font-bold">{receivedCores}</div>
          </Card>

          {/* Spent Card */}
          <Card className="bg-gray-900 text-white p-4 rounded-lg border-0">
            <div className="flex items-center gap-1 mb-4 text-gray-400">
              <MinusCircle className="w-6 h-6 text-red-400" />
              <div className="flex items-center">
                Spent
                <HelpCircle className="w-4 h-4 ml-1 text-gray-500" />
              </div>
            </div>
            <div className="text-3xl font-bold">{spentCores}</div>
          </Card>
        </div>

        {/* Earn section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">
            Earn with daily.dev{" "}
            <Badge variant="outline" className="ml-2 bg-transparent">
              beta
            </Badge>
          </h2>
          <p className="text-gray-400 mb-4">
            Earn income by engaging with the daily.dev community, contributing
            valuable content, and receiving Cores from others. Once you reach
            100,000 Cores, you can request a withdrawal. Monetization is still
            in beta, so additional eligibility steps and requirements may apply.
          </p>

          {/* Progress bar */}
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-md bg-amber-400 flex items-center justify-center">
              <div className="w-3 h-3 bg-amber-600 rotate-45"></div>
            </div>
            <span className="text-gray-300">
              {totalCores.toLocaleString()} / {targetCores.toLocaleString()}{" "}
              Cores (≈ USD $1,000)
            </span>
          </div>

          <div className="mb-4 h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-400 to-amber-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>

          <Button
            variant="outline"
            className="text-gray-400 border-gray-700 hover:bg-gray-800"
          >
            Withdraw
          </Button>
        </div>

        <Separator className="my-8 bg-gray-800" />

        {/* Transaction history */}
        <div>
          <h2 className="text-xl font-bold mb-6">Transaction history</h2>
          <p className="text-gray-400">You have no transactions yet.</p>
        </div>
      </div>

      {/* Right sidebar */}
      <div className="w-72 border-l border-gray-800 p-6">
        <div className="bg-gray-900 rounded-xl p-4 mb-6">
          <h3 className="text-lg font-semibold mb-1">Buy Cores</h3>
          <p className="text-gray-400 text-sm mb-4">
            Stock up on Cores to engage, reward, and unlock more on daily.dev
          </p>

          <div className="grid grid-cols-3 gap-2 mb-4">
            {/* 100 Cores */}
            <div className="bg-gray-800 rounded-lg p-3 flex flex-col items-center">
              <div className="w-8 h-8 rounded-md bg-amber-400 flex items-center justify-center mb-2">
                <div className="w-4 h-4 bg-amber-600 rotate-45"></div>
              </div>
              <div className="font-bold">100</div>
              <div className="text-xs text-gray-400">$1.25</div>
            </div>

            {/* 300 Cores */}
            <div className="bg-gray-800 rounded-lg p-3 flex flex-col items-center">
              <div className="w-8 h-8 rounded-md bg-amber-400 flex items-center justify-center mb-2">
                <div className="w-4 h-4 bg-amber-600 rotate-45"></div>
              </div>
              <div className="font-bold">300</div>
              <div className="text-xs text-gray-400">$3.79</div>
            </div>

            {/* 600 Cores */}
            <div className="bg-gray-800 rounded-lg p-3 flex flex-col items-center">
              <div className="w-8 h-8 rounded-md bg-amber-400 flex items-center justify-center mb-2">
                <div className="w-4 h-4 bg-amber-600 rotate-45"></div>
              </div>
              <div className="font-bold">600</div>
              <div className="text-xs text-gray-400">$7.59</div>
            </div>
          </div>

          <Button className="w-full bg-gray-800 hover:bg-gray-700 text-gray-300">
            See more options
          </Button>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-3">
          <Button
            variant="outline"
            className="border-gray-700 hover:bg-gray-800 text-gray-300"
          >
            <FileText className="w-4 h-4 mr-2" />
            Docs
          </Button>
          <Button
            variant="outline"
            className="border-gray-700 hover:bg-gray-800 text-gray-300"
          >
            <FileText className="w-4 h-4 mr-2" />
            Terms
          </Button>
        </div>
      </div>
    </div>
  );
}
