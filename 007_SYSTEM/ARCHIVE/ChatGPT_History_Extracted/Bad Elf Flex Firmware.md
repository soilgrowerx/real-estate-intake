# Bad Elf Flex Firmware

**USER**:
I&#x27;m working with a bad elf flex GPS locating device and my Android phone I&#x27;ve followed the steps to upgrade the firmware to the latest version but it was not working after that. So the protocol that I was given was to use an older firmware version and rename it with the word force in the file to force it back to an older version I did this but in the upgrade process the USB came unplugged. I&#x27;m not certain which operating system the bad elf flex uses but I think it&#x27;s some sort of Linux or Unix operating system what would you recommend I do at this point to try and get the firmware reinstalled back onto the device? It&#x27;s not showing anything on the screen it will boot and show the LED lights but there&#x27;s no prompt on the screen One of the LED lights being purple indicates that it recognizes the USB drive attached and that it has a firmware file on the drive but it&#x27;s not making any kind of progress too get the firmware reinstalled I&#x27;m looking for any kind of manual button sequence that will factory reset the device or some other help outside of contacting tech support or sending it back in. I&#x27;ve searched through the product manual and can&#x27;t find anything either see what you can find online

---

**ASSISTANT**:
It seems like your Bad Elf Flex GPS device encountered an issue during the firmware update process. Given that the device now shows a purple LED indicating it recognizes the USB drive but isn&#x27;t progressing with the firmware installation, you can try the following steps to recover and reinstall the firmware:

1. **Ensure Proper Firmware File**: Double-check that the firmware file on the USB drive is correctly named and formatted. The file should be named with the &quot;force&quot; keyword as instructed (e.g., `firmware_force.bin`). Ensure the USB drive is formatted to FAT32, as this is the required format for the device to read it correctly.

2. **Manual Factory Reset**:
   - According to the Bad Elf support guidelines, there is no specific manual button sequence for a factory reset detailed in their general manuals. However, you can try the standard reset procedure:
     1. Turn off the device.
     2. Press and hold the power button for an extended period (up to 30 seconds) until the LED behavior changes or the device resets.
     3. If there&#x27;s no response, attempt a combination of power button and other buttons, such as the enter or arrow keys, which might trigger a recovery mode.

3. **Reattempt Firmware Installation**:
   - Reinsert the USB drive with the firmware file into the device. Make sure the USB connection is secure.
   - Turn on the device and wait patiently. The update process may take a few minutes where all the LEDs should turn purple, and you might see &quot;Updating firmware...&quot; on the screen if it gets that far.

4. **Check USB Drive Integrity**:
   - Sometimes, using a different USB drive can resolve the issue. Make sure the drive is functioning properly and is FAT32 formatted.

5. **Contacting Support**:
   - If these steps don&#x27;t work, the device might require professional assistance. Although you prefer not to, contacting Bad Elf&#x27;s technical support might be necessary for specific recovery instructions or potentially sending the device in for service.

For more detailed instructions, you can refer to the [Bad Elf Flex Firmware Update Guide](https://badelf.freshdesk.com/support/solutions/articles/47001168357-bad-elf-flex-updating-firmware-using-a-usb-drive) which outlines the typical update process and troubleshooting steps【8†source】【9†source】. 

These steps should help you troubleshoot and potentially recover your device without needing immediate support intervention. If all else fails, the manufacturer’s support would be the best route to ensure your device is properly restored.

---

**USER**:
Research to find out how to put the bad elf flex into recovery mode

---

**ASSISTANT**:
To put your Bad Elf Flex GPS device into recovery mode and resolve the firmware issue, follow these steps:

1. **Preparation**:
   - Ensure you have the correct firmware file. It should be named with the word &quot;force&quot; (e.g., `firmware_force.bin`).
   - Format your USB drive to FAT32 and copy the firmware file onto it.

2. **Recovery Process**:
   - **Power Off**: Turn off the Bad Elf Flex device.
   - **Insert USB**: Insert the USB drive with the firmware file into the device using the supplied USB-OTG adapter cable.
   - **Manual Recovery Sequence**:
     - Hold the power button for an extended period (up to 30 seconds) until the LED behavior changes or the device resets. This action can sometimes trigger a recovery mode.
     - If the device doesn’t enter recovery mode, try holding the power button in combination with other buttons (like the enter or arrow keys) to see if it initiates a recovery process.

3. **Firmware Installation**:
   - Once in recovery mode (indicated by a different LED pattern or screen prompt), the device should start reading the firmware from the USB drive.
   - You should see all LEDs turn purple during the update process. Be patient, as this can take 1-5 minutes. The screen should display &quot;Shutting down...&quot; or &quot;Updating firmware...&quot; messages.
   - Wait for the process to complete, indicated by hearing two beeps.

4. **Final Steps**:
   - Once the firmware update is complete and the device reboots, check the new firmware version by navigating to Settings &gt; Flex Info on the device.
   - Safely disconnect the USB drive and the USB-OTG adapter cable.

If these steps do not resolve the issue, consider using a different USB drive or re-downloading the firmware file to ensure it is not corrupted. If the device remains unresponsive, contacting Bad Elf&#x27;s technical support for further assistance would be necessary as they can provide specific recovery instructions or service options.

For detailed instructions and support, you can visit the Bad Elf support page [here](https://badelf.freshdesk.com/support/solutions/articles/47001168357-bad-elf-flex-updating-firmware-using-a-usb-drive)【16†source】【17†source】.

---

