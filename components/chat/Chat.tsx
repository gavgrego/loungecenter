"use client";

import { useChat } from "ai/react";
import {
  Modal,
  Button,
  Input,
  Card,
  CardBody,
  Spinner,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  ModalContent,
} from "@nextui-org/react";
import { Remark } from "react-remark";

const ChatbotModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: "/api/chat",
      streamProtocol: "text",
      keepLastMessageOnError: true,
    });

  return (
    <>
      <Button color="secondary" onPress={onOpen}>
        Talk to Termie
      </Button>
      <Modal
        isOpen={isOpen}
        scrollBehavior="inside"
        size="2xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          <ModalHeader>
            <h2 className="text-xl font-bold">Talk to Termie</h2>
          </ModalHeader>
          <ModalBody>
            <Card>
              <CardBody className="h-[400px] overflow-y-auto">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`mb-4 p-3 rounded-lg [&_a]:text-secondary  ${
                      message.role === "user"
                        ? "bg-secondary text-secondary-foreground ml-auto"
                        : "bg-default-100"
                    } max-w-[80%] ${message.role === "user" ? "ml-auto" : "mr-auto"}`}
                  >
                    <Remark>{message.content}</Remark>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex items-center space-x-2">
                    <Spinner size="sm" />
                    <span>Termie is thinking...</span>
                  </div>
                )}
              </CardBody>
            </Card>
          </ModalBody>
          <ModalFooter>
            <form className="flex w-full space-x-2" onSubmit={handleSubmit}>
              <Input
                className="flex-grow"
                placeholder="Type your message..."
                value={input}
                onChange={handleInputChange}
              />
              <Button color="secondary" isLoading={isLoading} type="submit">
                Send
              </Button>
            </form>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ChatbotModal;
