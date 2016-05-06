class EventsController < ApplicationController

  def index
    @events = Event.all
  end

  def new
    @event = Event.new
  end

  def create
    Event.create(create_event_params)
    redirect_to action: 'index'
  end

  private

  def create_event_params
    params.require(:event).permit(:title, :start_time, :end_time)
  end

end