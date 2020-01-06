import {
  OutpostsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../OutpostsClient";
import { GetOutpostInput, GetOutpostOutput } from "../models/index";
import {
  deserializeAws_restJson1_1GetOutpostCommand,
  serializeAws_restJson1_1GetOutpostCommand
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

export type GetOutpostCommandInput = GetOutpostInput;
export type GetOutpostCommandOutput = GetOutpostOutput;

export class GetOutpostCommand extends $Command<
  GetOutpostCommandInput,
  GetOutpostCommandOutput,
  OutpostsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetOutpostCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OutpostsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetOutpostCommandInput, GetOutpostCommandOutput> {
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
    input: GetOutpostCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1GetOutpostCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<GetOutpostCommandOutput> {
    return deserializeAws_restJson1_1GetOutpostCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
