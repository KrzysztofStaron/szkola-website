"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bot, Send, X, Minimize2, Maximize2 } from "lucide-react";

type Message = {
  id: string;
  content: string;
  sender: "user" | "assistant";
  timestamp: Date;
};

export function AiAssistantChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Cześć! Jestem asystentem AI Szkóły Ogólnokształcącej w Strzelinie. Jak mogę Ci pomóc?",
      sender: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate AI response - in a real implementation, this would call an API
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "Dziękuję za wiadomość. W rzeczywistej implementacji, ta odpowiedź byłaby generowana przez model AI na podstawie Twojego zapytania.",
        sender: "assistant",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-white shadow-lg hover:bg-blue-700"
        >
          <Bot className="h-5 w-5" />
          <span>Asystent AI</span>
        </Button>
      ) : (
        <Card className={`w-80 shadow-lg ${isMinimized ? "h-auto" : "h-[500px]"}`}>
          <CardHeader className="flex flex-row items-center justify-between bg-blue-600 p-3 text-white">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <CardTitle className="text-base">Asystent AI</CardTitle>
            </div>
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-white hover:bg-blue-700"
                onClick={() => setIsMinimized(!isMinimized)}
              >
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-white hover:bg-blue-700"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          {!isMinimized && (
            <>
              <CardContent className="p-3">
                <ScrollArea className="h-[350px] pr-4">
                  <div className="space-y-4">
                    {messages.map(message => (
                      <div
                        key={message.id}
                        className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`flex max-w-[80%] items-start gap-2 ${
                            message.sender === "user" ? "flex-row-reverse" : "flex-row"
                          }`}
                        >
                          <Avatar className="h-6 w-6">
                            <AvatarImage
                              src={message.sender === "user" ? "/images/user-avatar.svg" : "/images/bot-avatar.svg"}
                            />
                            <AvatarFallback>{message.sender === "user" ? "U" : "AI"}</AvatarFallback>
                          </Avatar>
                          <div
                            className={`rounded-lg p-2 ${
                              message.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            <p className="text-sm">{message.content}</p>
                            <p className="mt-1 text-xs opacity-70">
                              {message.timestamp.toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex justify-start">
                        <div className="flex items-start gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src="/images/bot-avatar.svg" />
                            <AvatarFallback>AI</AvatarFallback>
                          </Avatar>
                          <div className="rounded-lg bg-gray-100 p-2">
                            <div className="flex space-x-1">
                              <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400"></div>
                              <div
                                className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
                                style={{ animationDelay: "0.2s" }}
                              ></div>
                              <div
                                className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
                                style={{ animationDelay: "0.4s" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>
              </CardContent>
              <CardFooter className="border-t p-3">
                <div className="flex w-full gap-2">
                  <Input
                    placeholder="Napisz wiadomość..."
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isLoading}
                    size="icon"
                    className="bg-blue-600 text-white hover:bg-blue-700"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </>
          )}
        </Card>
      )}
    </div>
  );
}
