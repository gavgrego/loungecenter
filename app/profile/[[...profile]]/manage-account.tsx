"use client";

import { useUser } from "@clerk/nextjs";
import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  CircularProgress,
} from "@nextui-org/react";
import { useState } from "react";

const ManageAccount = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const cancelSubscription = async () => {
    setIsLoading(true);
    await fetch("/api/user", {
      method: "DELETE",
      body: JSON.stringify({ user }),
    });
    setIsLoading(false);

    console.log("after delete fetch");
    onClose();
  };

  return (
    <div>
      <h1>Manage Account</h1>
      <Button color="secondary" onPress={onOpen}>
        Cancel Your Pro Membership
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Cancel Your Pro Membership
              </ModalHeader>
              <ModalBody>
                <p>
                  Upon cancellation,{" "}
                  <strong>your account will be deleted</strong> along with your
                  subscription being cancelled. Please reach out to support for
                  a prorated refund.
                </p>
              </ModalBody>
              <ModalFooter>
                {isLoading ? (
                  <CircularProgress />
                ) : (
                  <Button color="secondary" onPress={cancelSubscription}>
                    Confirm
                  </Button>
                )}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ManageAccount;
