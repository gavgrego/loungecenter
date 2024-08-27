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
  Checkbox,
} from "@nextui-org/react";
import { useState } from "react";

const ManageAccount = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

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
      <Button className="mt-4" color="secondary" onPress={onOpen}>
        Cancel Your Pro Membership
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader>Cancel Your Pro Membership</ModalHeader>
              <ModalBody>
                <p>
                  Upon cancellation,{" "}
                  <strong>your account will be deleted</strong> along with your
                  subscription being cancelled.
                </p>
                <p>
                  If you would like to resubscribe, you will need to create a
                  new account.
                </p>
              </ModalBody>
              <ModalFooter>
                {isLoading ? (
                  <CircularProgress />
                ) : (
                  <>
                    <Checkbox onChange={() => setIsConfirmed(!isConfirmed)}>
                      I understand that my account will be deleted in addition
                      to my subscription being cancelled.
                    </Checkbox>
                    <Button
                      color="secondary"
                      isDisabled={!isConfirmed}
                      onPress={cancelSubscription}
                    >
                      Confirm
                    </Button>
                  </>
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
