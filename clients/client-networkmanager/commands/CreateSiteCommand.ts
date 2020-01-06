import {
  NetworkManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../NetworkManagerClient";
import { CreateSiteRequest, CreateSiteResponse } from "../models/index";
import {
  deserializeAws_restJson1_1CreateSiteCommand,
  serializeAws_restJson1_1CreateSiteCommand
} from "../protocols/Aws_restJson1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type CreateSiteCommandInput = CreateSiteRequest;
export type CreateSiteCommandOutput = CreateSiteResponse;

export class CreateSiteCommand extends $Command<
  CreateSiteCommandInput,
  CreateSiteCommandOutput,
  NetworkManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateSiteCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSiteCommandInput, CreateSiteCommandOutput> {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateSiteCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1CreateSiteCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<CreateSiteCommandOutput> {
    return deserializeAws_restJson1_1CreateSiteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}