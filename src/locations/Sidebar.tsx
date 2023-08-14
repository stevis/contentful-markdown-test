import React from "react";
import { SidebarAppSDK } from "@contentful/app-sdk";
import { Button, Stack } from "@contentful/f36-components";
import { useSDK } from "@contentful/react-apps-toolkit";
import { test } from "../scripts/test";

const Sidebar = () => {
  const sdk = useSDK<SidebarAppSDK>();

  const testMarkdownConversion = async () => {
    test();
  };

  return (
    <Stack flexDirection="column" spacing="spacingS">
      <Button
        variant="secondary"
        isFullWidth
        onClick={() => testMarkdownConversion()}
      >
        Test
      </Button>
    </Stack>
  );
};

export default Sidebar;
