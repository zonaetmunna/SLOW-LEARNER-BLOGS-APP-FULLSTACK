"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter FAQs based on search query
  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Help Center</h3>
        <p className="text-sm text-muted-foreground">
          Find answers to common questions or reach out for support
        </p>
      </div>
      <Separator />

      <div className="w-full max-w-md">
        <Input
          type="text"
          placeholder="Search for help..."
          className="w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-base font-medium">Frequently Asked Questions</h4>
          <p className="text-sm text-muted-foreground">
            Quick answers to common questions
          </p>
        </div>
        <Separator />

        <Accordion type="single" collapsible className="w-full">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <AccordionItem key={`faq-${index}`} value={`faq-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <div
                    className="text-sm text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </AccordionContent>
              </AccordionItem>
            ))
          ) : (
            <p className="text-center py-4 text-muted-foreground">
              No results found for &quot;{searchQuery}&quot;
            </p>
          )}
        </Accordion>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-base font-medium">Contact Support</h4>
          <p className="text-sm text-muted-foreground">
            Need more help? Get in touch with our support team
          </p>
        </div>
        <Separator />

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-4">
            <h5 className="font-medium mb-2">Email Support</h5>
            <p className="text-sm text-muted-foreground mb-4">
              Response time: 24-48 hours
            </p>
            <Button variant="outline" className="w-full">
              Send an email
            </Button>
          </div>
          <div className="border rounded-lg p-4">
            <h5 className="font-medium mb-2">Live Chat</h5>
            <p className="text-sm text-muted-foreground mb-4">
              Available Monday-Friday, 9am-5pm EST
            </p>
            <Button variant="outline" className="w-full">
              Start a chat
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-base font-medium">Resources</h4>
          <p className="text-sm text-muted-foreground">
            Helpful guides and documentation
          </p>
        </div>
        <Separator />

        <div className="grid md:grid-cols-3 gap-4">
          {resources.map((resource, index) => (
            <div
              key={`resource-${index}`}
              className="border rounded-lg p-4 hover:border-primary transition-colors"
            >
              <h5 className="font-medium mb-2">{resource.title}</h5>
              <p className="text-sm text-muted-foreground mb-4">
                {resource.description}
              </p>
              <Button variant="link" className="px-0">
                Learn more →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const faqs = [
  {
    question: "How do I create an account?",
    answer:
      "To create an account, click on the <strong>Sign Up</strong> button in the top right corner of the homepage. You can sign up using your email address or through a social media account like Google or GitHub.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "To reset your password, click on the <strong>Sign In</strong> button, then select <strong>Forgot Password</strong>. Enter your email address and follow the instructions sent to your inbox.",
  },
  {
    question: "How do I follow specific topics or tags?",
    answer:
      "You can follow topics or tags from the <strong>Tags</strong> section in your settings. You can also follow a tag directly from any article by clicking on the tag and then the follow button.",
  },
  {
    question: "How do I save articles for later?",
    answer:
      "To save an article for later reading, click the bookmark icon on any article card or at the top of an article page. You can access your saved articles from your profile under <strong>Reading List</strong>.",
  },
  {
    question: "Can I change my username?",
    answer:
      "Yes, you can change your username in your <strong>Profile Settings</strong>. Note that you can only change your username once every 30 days.",
  },
  {
    question: "How do I delete my account?",
    answer:
      "You can delete your account from the <strong>Privacy Settings</strong> page. Scroll to the bottom and click on <strong>Delete Account</strong>. Please note that this action is permanent and cannot be undone.",
  },
  {
    question: "How do I mute specific topics or authors?",
    answer:
      "You can mute topics from the <strong>Tags Settings</strong> page. To mute an author, go to their profile and click on the three-dot menu, then select <strong>Mute</strong>.",
  },
  {
    question: "How do I customize my feed?",
    answer:
      "You can customize your feed by following specific tags and authors. You can also adjust your feed preferences in the <strong>Feed Settings</strong> section.",
  },
];

const resources = [
  {
    title: "Getting Started Guide",
    description: "Learn the basics and set up your account correctly",
  },
  {
    title: "Content Guidelines",
    description: "Understand our content policies and standards",
  },
  {
    title: "API Documentation",
    description: "Integrate with our platform using our public API",
  },
  {
    title: "Keyboard Shortcuts",
    description: "Navigate faster with keyboard shortcuts",
  },
  {
    title: "Monetization Guide",
    description: "Learn how to monetize your content on our platform",
  },
  {
    title: "Community Guidelines",
    description: "Best practices for engaging with the community",
  },
];
