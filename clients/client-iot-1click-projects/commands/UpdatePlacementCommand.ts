import {
  IoT1ClickProjectsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../IoT1ClickProjectsClient";
import {
  UpdatePlacementRequest,
  UpdatePlacementResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1UpdatePlacementCommand,
  serializeAws_restJson1_1UpdatePlacementCommand
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

export type UpdatePlacementCommandInput = UpdatePlacementRequest;
export type UpdatePlacementCommandOutput = UpdatePlacementResponse;

export class UpdatePlacementCommand extends $Command<
  UpdatePlacementCommandInput,
  UpdatePlacementCommandOutput,
  IoT1ClickProjectsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdatePlacementCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoT1ClickProjectsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdatePlacementCommandInput, UpdatePlacementCommandOutput> {
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
    input: UpdatePlacementCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1UpdatePlacementCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<UpdatePlacementCommandOutput> {
    return deserializeAws_restJson1_1UpdatePlacementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}