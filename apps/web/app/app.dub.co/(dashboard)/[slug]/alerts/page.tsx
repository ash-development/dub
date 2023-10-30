import { InfoTooltip, MaxWidthWrapper, TooltipContent } from "@dub/ui";
import { HOME_DOMAIN } from "@dub/utils";

export default function ProjectAlerts() {
  return (
    <>
      <div className="flex h-36 items-center border-b border-gray-200 bg-white">
        <MaxWidthWrapper>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl text-gray-600">Alerts</h1>
              <InfoTooltip
                content={
                  <TooltipContent
                    title="Learn more about how to add, configure, and verify custom domains on Dub."
                    href={`${HOME_DOMAIN}/help/article/how-to-add-custom-domain`}
                    target="_blank"
                    cta="Learn more"
                  />
                }
              />
            </div>
            {/* <AddEditDomainButton /> */}
          </div>
        </MaxWidthWrapper>
      </div>
    </>
  );
}
