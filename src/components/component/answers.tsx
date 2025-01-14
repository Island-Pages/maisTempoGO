import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"

export function Answers() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto grid gap-10 px-4 md:grid-cols-2 md:gap-16 md:px-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What is our Service?</h2>
            <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
              Our service is a comprehensive platform that provides a wide range of tools and features to help you
              streamline your business operations. From project management to customer relationship management, we've
              got you covered.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Your Obligations</h3>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>Provide accurate and up-to-date information</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>Comply with our terms of service and privacy policy</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>Maintain the security of your account</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">What We Don't Do</h3>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <XIcon className="mt-1 h-5 w-5 flex-shrink-0 text-red-500" />
                <span>We don't share your data with third parties</span>
              </li>
              <li className="flex items-start gap-2">
                <XIcon className="mt-1 h-5 w-5 flex-shrink-0 text-red-500" />
                <span>We don't require you to sign long-term contracts</span>
              </li>
              <li className="flex items-start gap-2">
                <XIcon className="mt-1 h-5 w-5 flex-shrink-0 text-red-500" />
                <span>We don't charge hidden fees or penalties</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
              Here are the most common questions we receive about our service. If you have any other questions, please
              don't hesitate to contact us.
            </p>
          </div>
          <div className="space-y-4">
            <Collapsible>
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-muted px-4 py-3 text-left font-medium transition-colors hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                <span>What is the pricing structure?</span>
                <ChevronDownIcon className="h-5 w-5 transition-transform duration-300 [&[data-state=open]]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 pt-2 text-muted-foreground">
                Our pricing is based on the number of users and the features you need. We offer a range of plans to fit
                your budget and requirements.
              </CollapsibleContent>
            </Collapsible>
            <Collapsible>
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-muted px-4 py-3 text-left font-medium transition-colors hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                <span>How do I cancel my subscription?</span>
                <ChevronDownIcon className="h-5 w-5 transition-transform duration-300 [&[data-state=open]]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 pt-2 text-muted-foreground">
                You can cancel your subscription at any time by logging into your account and going to the billing
                section. We don't require long-term contracts, so you can leave whenever you'd like.
              </CollapsibleContent>
            </Collapsible>
            <Collapsible>
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-muted px-4 py-3 text-left font-medium transition-colors hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                <span>What kind of support do you offer?</span>
                <ChevronDownIcon className="h-5 w-5 transition-transform duration-300 [&[data-state=open]]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 pt-2 text-muted-foreground">
                We offer a variety of support options, including email, live chat, and a comprehensive knowledge base.
                Our team is dedicated to helping you get the most out of our service.
              </CollapsibleContent>
            </Collapsible>
            <Collapsible>
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-muted px-4 py-3 text-left font-medium transition-colors hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                <span>Do you offer any integrations?</span>
                <ChevronDownIcon className="h-5 w-5 transition-transform duration-300 [&[data-state=open]]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 pt-2 text-muted-foreground">
                Yes, we offer a wide range of integrations with popular business tools and software. This allows you to
                seamlessly connect our service with the tools you already use.
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </div>
    </section>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
