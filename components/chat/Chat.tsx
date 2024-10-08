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
  ModalContent
} from "@nextui-org/react";

const ChatbotModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: "/api/chat" // Make sure to create this API route in your Next.js app
    });

  return (
    <>
      <Button onPress={onOpen} color="secondary">
        Talk to Termie
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior="inside"
        size="2xl"
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
                    className={`mb-4 p-3 rounded-lg ${
                      message.role === "user"
                        ? "bg-secondary text-secondary-foreground ml-auto"
                        : "bg-default-100"
                    } max-w-[80%] ${message.role === "user" ? "ml-auto" : "mr-auto"}`}
                  >
                    {message.content}
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
            <form onSubmit={handleSubmit} className="flex w-full space-x-2">
              <Input
                value={input}
                onChange={handleInputChange}
                placeholder="Type your message..."
                className="flex-grow"
              />
              <Button type="submit" color="secondary" isLoading={isLoading}>
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
